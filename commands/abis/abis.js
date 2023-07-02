import Conf from "conf";
import chalk from "chalk";
import * as fs from "fs";

//**Description:  Retrieves all ABI names in storage. */

const store = new Conf({ projectName: 'eth-cli' });
const abis = async () => {
  const abiStore = store.store
  const abis = Object.keys(abiStore);

  if (abis.length === 0) {
    console.log("No ABIs in store");
    return;
  }

  console.log(`Total: ${chalk.bold(store.size)}`);
  abis.forEach((abi) => {
    console.log(`- ${abi}`);
  });
}

export default abis