require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {

    base: {
      url: `https://base-pokt.nodies.app`,
      accounts: [process.env.privateKey],
    },
    linea: {
      url: `https://linea.drpc.org`,
      accounts: [process.env.privateKey],
    },
    arbitrum: {
      url: `https://rpc.ankr.com/arbitrum`,
      accounts: [process.env.privateKey],
    }
  },
  solidity: {
    compilers: [
      { version: "0.8.7" },
      { version: "0.7.6" },
      { version: "0.6.6" }
    ]
  },
};
