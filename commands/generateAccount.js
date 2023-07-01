import chalk from "chalk";
import { ethers } from "ethers";
import config from "../cli-config.js";
import * as fs from "fs";

import yargs from "yargs";

const { argv } = yargs(process.argv)
let write = process.argv[3];

const generateAccount = async () => {

  const wallet = ethers.Wallet.createRandom()


  if (write == "--export") {
    let newWallet = {
      address: wallet.address,
      privateKey: wallet.privateKey,
    };

    if (wallet.mnemonic) {
      newWallet.mnemonic = wallet.mnemonic.phrase;
    }


    fs.writeFile(
      `new-wallet-${wallet.address}.json`,
      JSON.stringify(newWallet),
      (error) => {
        if (error) {
          throw new Error(JSON.stringify(error));
        } else {
          console.log("Wallet created successfully✅");
          console.log(
            `Written to ${chalk.green.underline.bold(
              `./new-wallet-${wallet.address}.json`
            )}`
          );
          console.log(
            chalk.yellow.bold(
              "DO NOT REVEAL YOUR MNEMONIC AND PRIVATE KEY TO ANYONE... PROTECT YOUR FUNDS!!!"
            )
          );
        }
      }
    );
  } else {
    if (wallet.mnemonic) {
      console.log(
        `MNEMONIC(${chalk.yellow.underline.bold(
          "DO NOT REVEAL THIS TO ANYONE!!!"
        )}):\n`,
        wallet.mnemonic.phrase
      );
    }

    console.log(
      `\nPRIVATE KEY(${chalk.yellow.underline.bold(
        "DO NOT REVEAL THIS TO ANYONE!!!"
      )}):\n`,
      wallet.privateKey
    );

    console.log("\nADDRESS:\n", wallet.address);
  }



}

export default generateAccount
