import chalk from "chalk";
import { ethers } from "ethers";
import config from "../../cli-config.js";
import * as fs from "fs";
import axios from "axios";
import yargs from "yargs";

//**Description: Gets the log of past events of a contract address. */

const { argv } = yargs(process.argv)
let address = process.argv[3];
let network = argv.network
if (!network) { network = "mainnet" }
const providerApiKey = config.providerApiKey
const write = process.argv[4];

const getEvents = async () => {

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

  const blockNumber = await provider.getBlockNumber();


  const { data: events } = await axios.get(
    `${etherscanUrl}/api?module=logs&action=getLogs&address=${address}&fromBlock=${0
    }&toBlock=${blockNumber}&page=${1}&offset=${1000
    }&apikey=${etherscanApiKey}`
  );

  console.log(events.result)

  if (write == "--export") {
    fs.writeFile(
      "events.json",
      JSON.stringify({
        account: address,
        chain: network,
        total: events.result.length,
        events: events.result,
      }),
      (error) => {
        if (error) {
          console.log(`Total: ${chalk.green(events.result.length)}`);
          console.log(events.result);
          throw new Error(JSON.stringify(error));
        } else {
          console.log("Events retrieved successfully✅");
          console.log(
            `Written to ${chalk.green.underline.bold("./events.json")}`
          );
        }
      }
    );
  } else {
    console.log(events.result);
    console.log("Events retrieved successfully✅");
  }
}

export default getEvents
