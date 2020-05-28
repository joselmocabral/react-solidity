import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/7021878f658c422fa7430640d4b429a2"
  );
  web3 = new Web3(provider);
}

//const web3 = new Web3(window.ethereum);

// try {
//   window.ethereum.enable().then(function() {
//     // User has allowed account access to DApp...
//   });
// } catch (e) {
//   // User has denied account access to DApp...
// }
// web3.eth.getAccounts().then(console.log);

export default web3;
