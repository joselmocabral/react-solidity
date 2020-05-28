import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xC1DE64b58981E8B50b5Aa9762d50d47C78218f70"
);

export default instance;
