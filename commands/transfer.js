import chalk from "chalk";
import { ethers } from "ethers";
import config from "../cli-config.js";

import yargs from "yargs";

const { argv } = yargs(process.argv)
let address = process.argv[3];
let network = argv.network
if (!network) { network = "mainnet" }
const providerApiKey = config.providerApiKey
let amount = process.argv[4]
const privateKey = argv.privatekey

const transfer = async () => {
  const provider = new ethers.AlchemyProvider(network, providerApiKey)

  if (address.includes(".eth")) {
    address = await provider.resolveName(address)
  }

  if (!config.networks.includes(network)) {
    console.error(chalk.red(`Network not supported`))
    return
  }

  if (!ethers.isAddress(address)) {
    console.error(chalk.red(`Invalid Receiver Address`))
    return
  }

  const wallet = new ethers.Wallet(privateKey).connect(provider)
  const balance = await provider.getBalance(wallet.address)
  const value = ethers.parseEther(amount)

  if (balance < value) {
    console.error(chalk.red(`Acoount balance is less than amount`))
    return
  }

  if (!privateKey) {
    console.error(` Enter private key ${chalk.blue(`--privatekey=<PRIVATEKEY>`)}`)
    return
  }

  try {
    await wallet.sendTransaction({
      to: address,
      value: value,
    });
    console.log(
      `Successfully transferred ${chalk.green(
        amount
      )} ETH to ${chalk.underline(address)}✅`
    );
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
}

export default transfer
