import Conf from "conf";
import chalk from "chalk";
import * as fs from "fs";

const store = new Conf({ projectName: 'eth-cli' });

const name = process.argv[3];
const abiPath = process.argv[4];

const updateAbi = async () => {
  if (!abiPath) {
    console.error(chalk.red("Enter Abi Path"))
    return
  }


  if (!store.has(name)) {
    throw new Error(`${chalk.bold.underline(name)} does not exist!`);
  }

  const abi = fs.readFileSync(abiPath, { encoding: "utf8" });
  store.set(name, abi);
  console.log(`${chalk.bold(name)} abi updated successfully✅`);
  return
}

export default updateAbi