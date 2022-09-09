
const { ethers, run, network } = require("hardhat")



async function main() {
  const MarketPlaceFactory = await ethers.getContractFactory("MarketPlace")
  console.log("Deploying contract...")
  const marketPlace = await MarketPlaceFactory.deploy()
  await marketPlace.deployed()
  console.log(`Deployed contract to: ${marketPlace.address}`)

  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...")
    await marketPlace.deployTransaction.wait(6)
    await verify(marketPlace.address, [])
  }
  
    const tx = await marketPlace.listItems("a")
   

    // const tr = await tx.wait (1)
  
    // console.log(tr.events[0].args.itemName)

}


const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

