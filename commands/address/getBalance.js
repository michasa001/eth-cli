import chalk from "chalk";
import { ethers } from "ethers";
import config from "../../cli-config.js";
import yargs from "yargs";


//**Description: Gets the eth balance of an address */

const { argv } = yargs(process.argv)
let address = process.argv[3];
let network = argv.network
if (!network) { network = "mainnet" }
const providerApiKey = config.providerApiKey

const getBalance = async () => {

  const provider = new ethers.AlchemyProvider(network, providerApiKey)

  if (!address) {
    console.error(chalk.red("Please enter address"))
    return
  }

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

  const balance = await provider.getBalance(address)
  const ethBalance = ethers.formatEther(balance)
  console.log(chalk.green(`address holds ${ethBalance} ETH on ${network}`))
}

export default getBalance
