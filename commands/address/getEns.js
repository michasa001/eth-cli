import chalk from "chalk";
import { ethers } from "ethers";
import config from "../../cli-config.js";

import yargs from "yargs";

const { argv } = yargs(process.argv)
const address = process.argv[3];
let network = argv.network
if (!network) { network = "mainnet" }
const providerApiKey = config.providerApiKey

const getEns = async () => {

  const provider = new ethers.AlchemyProvider(network, providerApiKey)

  
  if (!config.networks.includes(network)) {
    network = "mainnet"
  }

  if (!ethers.isAddress(address)) {
    console.error(chalk.red(`Invalid Address`))
    return
  }

  const ens = await provider.lookupAddress(address)
  console.log(chalk.green(`${ens}`))
}

export default getEns
