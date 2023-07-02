#!/usr/bin/env node

import getBalance from '../commands/address/getBalance.js';
import getEns from '../commands/address/getEns.js';
import resolveEns from '../commands/address/resolveEns.js';
import transfer from '../commands/transfer.js';
import getTransaction from '../commands/transactions/getTransaction.js';
import getTransactions from '../commands/transactions/getTransactions.js';
import generateAccount from '../commands/generateAccount.js';
import getEvents from '../commands/events/events.js';
import watchPendingTransactions from '../commands/watch.js';
import addAbi from '../commands/abis/addAbi.js';
import removeAbi from '../commands/abis/removeAbi.js';
import getAbi from '../commands/abis/getAbi.js';
import updateAbi from '../commands/abis/updateAbi.js';
import abis from '../commands/abis/abis.js';
import contract from '../commands/contract.js';

const command = process.argv[2];

if (command === '-help') {
  printHelp();
} else {
  executeCommand(command);
}

function printHelp() {
  console.log('Available commands:');
  console.log('- balance');
  console.log('- ens');
  console.log('- resolvename');
  console.log('- transfer');
  console.log('- gettransaction');
  console.log('- gettransactions');
  console.log('- generate');
  console.log('- events');
  console.log('- watchtransactions');
  console.log('- addabi');
  console.log('- removeabi');
  console.log('- getabi');
  console.log('- updateabi');
  console.log('- abis');
  console.log('- contract');
}

function executeCommand(command) {
  switch (command) {
    case 'balance':
      getBalance();
      break;
    case 'ens':
      getEns();
      break;
    case 'resolvename':
      resolveEns();
      break;
    case 'transfer':
      transfer();
      break;
    case 'gettransaction':
      getTransaction();
      break;
    case 'gettransactions':
      getTransactions();
      break;
    case 'generate':
      generateAccount();
      break;
    case 'events':
      getEvents();
      break;
    case 'watchtransactions':
      watchPendingTransactions();
      break;
    case 'addabi':
      addAbi();
      break;
    case 'removeabi':
      removeAbi();
      break;
    case 'getabi':
      getAbi();
      break;
    case 'updateabi':
      updateAbi();
      break;
    case 'abis':
      abis();
      break;
    case 'contract':
      contract();
      break;
    default:
      console.error(`Unknown command: ${command}`);
      process.exit(1);
  }
}
