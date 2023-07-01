import Conf from "conf";
import chalk from "chalk";

const store = new Conf({ projectName: 'eth-cli' });

const name = process.argv[3];


const removeAbi = async () => {

  if (!store.has(name)) {
    throw new Error(`${chalk.bold.underline(name)} does not exist!`);
  }

  store.delete(name);
  console.log(`${chalk.bold(name)} deleted successfully✅`);
  return
}

export default removeAbi