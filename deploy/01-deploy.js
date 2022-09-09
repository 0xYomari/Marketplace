const {developmentChains} = require("../helper-hardhat-config")
const {verify}= require("../utils/verify")

module.exports = async ({deployments, getNamedAccounts})=>{
    const{deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    
    const _args= []
    const marketPlace = await deploy("MarketPlace",{
        from:deployer,
        args:_args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(marketPlace.address, _args)
    }
}

module.exports.tags = ["all", "marketplace"]