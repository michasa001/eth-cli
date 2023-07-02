import Conf from "conf";
import chalk from "chalk";
import * as fs from "fs";

//**Description:  Adds an ABI JSON file to storage. */


const store = new Conf({ projectName: 'eth-cli' });

const name = process.argv[3];
const abiPath = process.argv[4];

const addAbi = async () => {
  if (!abiPath) {
    console.error(chalk.red("Enter Abi Path"))
    return
  }
  const abi = fs.readFileSync(abiPath, { encoding: "utf8" });
  store.set(name, abi);
  console.log(`${chalk.bold(name)} stored successfully✅`);
  return
}

export default addAbi