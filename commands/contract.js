import Conf from "conf";
import chalk from "chalk";
import { ethers } from "ethers";
import config from "../cli-config.js";
import yargs from "yargs";
import * as repl from "repl";


//**Description: Generates a contract instance and opens an environment to interact with the contract. */

const { argv } = yargs(process.argv)
const store = new Conf({ projectName: 'eth-cli' });
let address = process.argv[3];
let network = argv.network
if (!network) { network = "mainnet" }
const privateKey = argv.privatekey
const name = argv.abi
const providerApiKey = config.providerApiKey

const contract = async () => {
  const provider = new ethers.AlchemyProvider(network, providerApiKey)

  if (!privateKey) {
    console.error("Enter private key with command")
    return
  }

  if (address.includes(".eth")) {
    address = await provider.resolveName(address)
  }

  if (!config.networks.includes(network)) {
    console.error(chalk.red(`Network not supported`))
    return
  }

  const abi = store.get(name);
  let contract;
  const wallet = new ethers.Wallet(privateKey).connect(provider);
  contract = new ethers.Contract(address, abi, wallet);

  repl.start().context.contract = contract;
}

export default contract