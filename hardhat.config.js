require("@nomiclabs/hardhat-waffle");

// Load the .env file
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
var dotenvConfig = dotenv.config()
dotenvExpand.expand(dotenvConfig)


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

  networks: {
    "hardhat": {
    },

    "optkovan": {
      url: "https://kovan.optimism.io",
      chainId: 69,
      accounts: [process.env.DEPLOY_PRIVKEY_OPT_KOVAN]
    },

    "kovan": {
      url: "https://kovan.infura.io/v3",
      chainId: 42,
      accounts: [process.env.DEPLOY_PRIVKEY_OPT_KOVAN]
    }

  },

  solidity: "0.8.4",
};
