async function main() {
    const Collection = await ethers.getContractFactory("Collection")
    const collection = await Collection.deploy()
    await collection.deployed()
    console.log("Contract deployed to address:", collection.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
    // 0x9B6F4D2066F5fd7273D4B84D53912e37D750BbB5