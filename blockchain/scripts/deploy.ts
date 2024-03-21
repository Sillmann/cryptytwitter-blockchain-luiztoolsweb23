import { ethers } from "hardhat";

async function main() {

  const helloworld = await ethers.deployContract("CrypTwitter");

  await helloworld.waitForDeployment();

  const address = await helloworld.getAddress();

  console.log(`Deploy finished at ${address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});