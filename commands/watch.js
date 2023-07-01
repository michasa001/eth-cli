import Web3 from "Web3";
import config from "../cli-config.js";
import { ethers } from "ethers"

const providerApiKey = config.providerApiKey

let web3 = new Web3(new Web3.providers.HttpProvider(`https://eth-mainnet.g.alchemy.com/v2/${providerApiKey}`));
let web3ws = new Web3(
  new Web3.providers.WebsocketProvider(`wss://eth-mainnet.g.alchemy.com/v2/${providerApiKey}`)
);
let subscription
let address = process.argv[3];
const provider = new ethers.AlchemyProvider("mainnet", providerApiKey)

const subscribe = (topic) => {
  subscription = web3ws.eth.subscribe(topic, (err, res) => {
    if (err) {
      console.log("subscription error " + err);
    }
  });
};


const watchTransactions = () => {
  console.log("Watching all pending transactions on mainnet... ");

  subscription.on("data", (txHash) => {
    setTimeout(async () => {
      try {
        let tx = await web3.eth.getTransaction(txHash);
        if (tx != null) {
          if (address && (tx.to == address || tx.from == address)) { console.log(tx) } else { console.log(tx) }
        }

      } catch (error) {
        console.log("watch error " + error);
      }
    }, 20000);
  });
};

const watchPendingTransactions = async () => {
  if (address && address.includes(".eth")) {
    address = await provider.resolveName(address)
  }

  if (address && !ethers.isAddress(address)) {
    console.error(chalk.red(`Invalid Receiver Address`))
    return
  }
  subscribe("pendingTransactions");
  watchTransactions();

}

export default watchPendingTransactions