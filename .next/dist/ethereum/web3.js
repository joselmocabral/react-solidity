"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
  web3 = new _web2.default(window.ethereum);
} else {
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/7021878f658c422fa7430640d4b429a2");
  web3 = new _web2.default(provider);
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

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLEFBQVAsU0FBZ0IsQUFBckQsYUFBa0UsQUFDaEU7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFoQixBQUFQLEFBQ0Q7QUFGRCxPQUVPLEFBQ0w7TUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDZixBQURlLEFBQWpCLEFBR0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7OztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb3NlbG1vY2FicmFsL0Rlc2t0b3AvU29saWRpdHkva2lja3N0YXJ0In0=