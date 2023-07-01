import chalk from "chalk";
import { ethers } from "ethers";
import config from "../../cli-config.js";

import yargs from "yargs";

const { argv } = yargs(process.argv)
let hash = process.argv[3];
let network = argv.network
if (!network) { network = "mainnet" }
const providerApiKey = config.providerApiKey

const getTransaction = async () => {

  const provider = new ethers.AlchemyProvider(network, providerApiKey)

  if (!config.networks.includes(network)) {
    console.error(chalk.red(`Network not supported`))
    return
  }


  const transaction = await provider.getTransaction(hash)
  console.log(transaction)
}

export default getTransaction
