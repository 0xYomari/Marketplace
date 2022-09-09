require("@nomicfoundation/hardhat-toolbox")


require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("hardhat-gas-reporter")

require("dotenv").config()

const RINKEBY_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   // defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
            allowUnlimitedContractSize: true
        },
        goerli: {
            chainId: 5,
            blockConfirmations: 6,
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    solidity: {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000000,
          },
        },
      },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },

  
}
