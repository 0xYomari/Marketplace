const { ethers } = require("hardhat")

const networkConfig = {
    5: {
        name: "goerli",
    },
}
developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
