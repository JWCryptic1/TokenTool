/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("hardhat-contract-sizer");


module.exports = {
  solidity: "0.8.20",
  settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
    strict: true
  },
   etherscan: {
    apiKey: {
      sepolia:[process.env.ETHERSCAN_API]
    } 
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    ethereum_mainnet: {
      url: `https://mainnet.infura.io/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY]
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed.bnbchain.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY]
    },
    pulse: {
      url: "https://rpc.pulsechain.com",
      accounts: [process.env.PRIVATE_KEY]
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY]
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY]
    },
    goldXtestnet: {
      url:  "https://testnet-rpc.goldxchain.io",
      chainId: 22324,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY]
    },
    goldXmainnet: {
      url:  " https://mainnet-rpc.goldxchain.io ",
      chainId: 42355,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
