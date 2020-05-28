const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: "0x" + compiledFactory.bytecode }) // add 0x bytecode
    .send({ from: accounts[0], gas: "1000000" });
  factory.setProvider(provider);

  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000"
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );

  campaign.setProvider(provider);
});

describe("Campaigns", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("marks caller as the campaign manager", async () => {
    const manager = await campaign.methods.manager().call();

    assert.equal(accounts[0], manager);
  });

  it("allows to contribute and mark as approvers", async () => {
    await campaign.methods.contribute().send({
      value: "200",
      from: accounts[1]
    });
    const isContributer = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributer);
  });

  it("verify if a minimum contribution is asked", async () => {
    try {
      await campaign.methods.contribute.send({
        gas: "50",
        from: accounts[2]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("end-to-end", async () => {
    await campaign.methods.contribute().send({
      from: accounts[3],
      value: web3.utils.toWei("50", "ether")
    });
    await campaign.methods
      .createRequest("A", web3.utils.toWei("30", "ether"), accounts[5])
      .send({
        from: accounts[0],
        gas: "1000000"
      });
    await campaign.methods.approveRequest(0).send({
      from: accounts[3],
      gas: "1000000"
    });
    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "1000000"
    });
    let balance = await web3.eth.getBalance(accounts[5]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);

    assert(balance > 129.999);
  });
});
