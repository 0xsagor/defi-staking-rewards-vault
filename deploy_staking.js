const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const StakingRewards = await hre.ethers.getContractFactory("StakingRewards");
  
  // Example addresses for staking and rewards tokens
  const stakingTokenAddr = "0x..."; 
  const rewardsTokenAddr = "0x...";
  const duration = 604800; // 1 week in seconds

  const staking = await StakingRewards.deploy(stakingTokenAddr, rewardsTokenAddr, duration);
  await staking.waitForDeployment();

  console.log("StakingRewards deployed to:", await staking.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
