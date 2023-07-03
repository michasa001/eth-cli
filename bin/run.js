#!/usr/bin/env node

import getBalance from "../commands/address/getBalance.js";
import getEns from "../commands/address/getEns.js";
import resolveEns from "../commands/address/resolveEns.js";
import transfer from "../commands/transfer.js";
import getTransaction from "../commands/transactions/getTransaction.js";
import getTransactions from "../commands/transactions/getTransactions.js";
import generateAccount from "../commands/generateAccount.js";
import getEvents from "../commands/events/events.js";
import watchPendingTransactions from "../commands/watch.js";
import addAbi from "../commands/abis/addAbi.js";
import removeAbi from "../commands/abis/removeAbi.js";
import getAbi from "../commands/abis/getAbi.js";
import updateAbi from "../commands/abis/updateAbi.js";
import abis from "../commands/abis/abis.js";
import contract from "../commands/contract.js";

const command = process.argv[2];

if (command == "-help" || command == "--help" || command == "help") {
  printHelp();
} else {
  executeCommand(command);
}

function printHelp() {
  console.log("Available commands:");
  console.log("- eth balance <ADDRESS || ENS>");
  console.log("- ens <ADDRESS>");
  console.log("- resolvename <ENS>");
  console.log(
    "- transfer <ADDRESS> <AMOUNT> --privatekey=<PRIVATEKEY> --network=<NETWORK>"
  );
  console.log("- transaction <HASH>");
  console.log("- transactions <ADDRESS>");
  console.log("- generate");
  console.log("- events <ADDRESS>");
  console.log("- watchtransactions");
  console.log("- addabi <NAME>");
  console.log("- removeabi <NAME>");
  console.log("- getabi <NAME>");
  console.log("- updateabi <NAME>");
  console.log("- abis");
  console.log(
    "- contract <ADDRESS> --abi=<abiName> --privatekey=<PRIVATEKEY> --network=<NETWORK>"
  );
  process.exit(0);
}

async function executeCommand(command) {
  try {
    switch (command) {
      case "balance":
        await getBalance();
        break;
      case "ens":
        await getEns();
        break;
      case "resolvename":
        await resolveEns();
        break;
      case "transfer":
        await transfer();
        break;
      case "transaction":
        await getTransaction();
        break;
      case "transactions":
        await getTransactions();
        break;
      case "generate":
        await generateAccount();
        break;
      case "events":
        await getEvents();
        break;
      case "watchtransactions":
        await watchPendingTransactions();
        break;
      case "addabi":
        await addAbi();
        break;
      case "removeabi":
        await removeAbi();
        break;
      case "getabi":
        await getAbi();
        break;
      case "updateabi":
        await updateAbi();
        break;
      case "abis":
        await abis();
        break;
      case "contract":
        await contract();
        break;
      default:
        console.error(`Unknown command: ${command}`);
        process.exit(1);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  if (command != "watchtransactions") process.exit(0);
}
