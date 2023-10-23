async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const owner = "0xDC8F0f1795B99B5cC2B4619C25BA03aF4b6F905C";
  const uniswaproutersepolia = "0x86dcd3293C53Cf8EFd7303B57beb2a3F671dDE98";
  const standardfactorysepolia = "0x5a56FAAfcfa37566579C8858AB0814e9c9145aEf";

  const standardFactory = await ethers.getContractFactory("StandardTokenFactory");
  const standard = await standardFactory.deploy();

  const liquidityFactory = await ethers.getContractFactory("LiquidityTokenFactory");
  const liquidity = await liquidityFactory.deploy();


  const create = await ethers.deployContract("CreateManage", deployer.address, uniswaproutersepolia.address, standard.address, liquidity.address);

  console.log("Token address:", await create.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });