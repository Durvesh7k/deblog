const hre = require('hardhat');
const Main = async() => {
  const [deployer] = await hre.ethers.getSigners()
  const Contract = await hre.ethers.getContractFactory('blog');// 1 ETH

  const blogContract = await Contract.deploy();
  await blogContract.deployed();


  console.log("The deployer of the contract is: ", deployer.address);
  console.log("The contract is deployed on this address: ", blogContract.address);

  saveFrontendFiles(blogContract, "blog")

}


function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../src/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);
  
  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

const runMain = async() => {
  try{
    await Main();
    process.exit(1);
  }
  catch(err){
    console.error(err);
    process.exit(0);
  }
}

runMain();