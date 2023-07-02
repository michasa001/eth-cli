import chalk from "chalk";
import { ethers } from "ethers";
import config from "../../cli-config.js";
import yargs from "yargs";

//**Description: Resolves an ENS name and gives the address. */

const { argv } = yargs(process.argv)
let ens = process.argv[3];
let network = argv.network
if (!network) { network = "mainnet" }
const providerApiKey = config.providerApiKey

const resolveEns = async () => {

  const provider = new ethers.AlchemyProvider(network, providerApiKey)

  if (!config.networks.includes(network)) {
    network = "mainnet"
  }
  
  if (!ens.includes(".eth")) {
    console.error(chalk.red(`Invalid Ens Name`))
    return
  }

  const address = await provider.resolveName(ens)
  console.log(chalk.green(`${address}`))

}

export default resolveEns
