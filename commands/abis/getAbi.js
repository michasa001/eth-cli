import Conf from "conf";
import chalk from "chalk";

//**Description: Gets an ABI from storage. */

const store = new Conf({ projectName: 'eth-cli' });
const name = process.argv[3];

const getAbi = async () => {

  if (!store.has(name)) {
    throw new Error(`${chalk.bold.underline(name)} does not exist!`);
  }

  console.log(store.get(name));
  return
}

export default getAbi