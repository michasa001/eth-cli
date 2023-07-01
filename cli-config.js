import yargs from "yargs";

const { argv } = yargs(process.argv)

const providerApiKey = "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";
const deployerPrivateKey = argv.privatekey
const etherscanApiKey = "HY44G42FN4UN1DEYSAN3SAVG639ZYXDJDT"


const config = {
  providerApiKey,
  deployerPrivateKey,
  networks: ["mainnet", "goerli", "sepolia", "arbitrum", "arbitrumGoerli", "optimism", "optimismGoerli", "polygon", "polygonMumbai", "zksync"],
  etherscanApiKey,
  "etherscan": {
    "mainnet": { "url": "https://api.etherscan.io", "key": etherscanApiKey }, "goerli": { "url": "https://api-goerli.etherscan.io", "key": etherscanApiKey }, "sepolia": { "url": "https://api-sepolia.etherscan.io", "key": etherscanApiKey },
  }
};

export default config;
