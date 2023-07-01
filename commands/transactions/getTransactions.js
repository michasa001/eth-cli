import chalk from "chalk";
import { ethers } from "ethers";
import config from "../../cli-config.js";
import * as fs from "fs";
import axios from "axios";

import yargs from "yargs";

const { argv } = yargs(process.argv)
let address = process.argv[3];
let network = argv.network
if (!network) { network = "mainnet" }
const providerApiKey = config.providerApiKey
const write = process.argv[4];

const getTransactions = async () => {

  const provider = new ethers.AlchemyProvider(network, providerApiKey)
  const etherscanApiKey = config.etherscan[network].etherscanApiKey
  const etherscanUrl = config.etherscan[network].url

  if (address.includes(".eth")) {
    address = await provider.resolveName(address)
  }

  if (!config.networks.includes(network)) {
    console.error(chalk.red(`Network not supported`))
    return
  }

  if (!ethers.isAddress(address)) {
    console.error(chalk.red(`Invalid Address`))
    return
  }

  const { data: transactions } = await axios.get(
    `${etherscanUrl}/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${etherscanApiKey}`
  );

  console.log(transactions.result)

  if (write == "--export") {
    fs.writeFile(
      "transactions.json",
      JSON.stringify({
        account: address,
        chain: network,
        total: transactions.result.length,
        transactions: transactions.result,
      }),
      (error) => {
        if (error) {
          console.log(`Total: ${chalk.green(transactions.result.length)}`);
          console.log(transactions.result);
          throw new Error(JSON.stringify(error));
        } else {
          console.log("Transactions retrieved successfully✅");
          console.log(
            `Written to ${chalk.green.underline.bold("./transactions.json")}`
          );
        }
      }
    );
  } else {
    console.log(transactions.result);
    console.log("Transactions retrieved successfully✅");
  }
}

export default getTransactions
