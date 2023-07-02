
# DOCUMENTATION


# Table of Contents

- [Description](#description)
- [Get Started](#get-started)
- [Commands](#commands)
  - [`eth abis`](#eth-abis)
  - [`eth addabi NAME PATH`](#eth-addabi-name-path)
  - [`eth balance <ADDRESS || ENS> --network=<NETWORK>`](#eth-balance-address--ens---networknetwork)
  - [`eth contract <ADDRESS> --abi=<abiName> --privatekey=<PRIVATEKEY> --network=<NETWORK>`](#eth-contract-address---abiabiname---privatekeyprivatekey---networknetwork)
  - [`eth ens <ADDRESS>`](#eth-ens-address)
  - [`eth events <ADDRESS>`](#eth-events-address)
  - [`eth generate`](#eth-generate)
  - [`eth getabi NAME`](#eth-getabi-name)
  - [`eth removeabi NAME`](#eth-removeabi-name)
  - [`eth resolvename NAME`](#eth-resolvename-name)
  - [`eth transaction HASH --network=<NETWORK>`](#eth-transaction-hash---networknetwork)
  - [`eth transactions ADDRESS --network=<NETWORK>`](#eth-transactions-address---networknetwork)
  - [`eth transfer <ADDRESS> <AMOUNT> --privatekey=<PRIVATEKEY> --network=<NETWORK>`](#eth-transfer-address-amount---privatekeyprivatekey---networknetwork)
  - [`eth updateab1 NAME PATH`](#eth-updateabi-name-path)
  - [`eth watchtransactions <ADDRESS>`](#eth-watchtransactions-address)
- [Networks](#networks)


# Description

ether-cli is a tool for querying the blockchain data and sending transcations right from your command line

# Get Started

To get started with ether-cli, follow these steps:

1. Install ether-cli globally using npm:
```
 npm install -g ether-cli
```

2. Run a command using the eth command:
```
eth COMMAND
```

3. Use the eth --help command to view the available commands and their usage:
4. 
```
 eth --help 
```


# Commands

- [`eth abis`](#eth-abis)
- [`eth addabi NAME PATH`](#eth-addabi-name-path)
- [`eth balance <ADDRESS || ENS> --network=<NETWORK>`](#eth-balance-address--ens---networknetwork)
- [`eth contract <ADDRESS> --abi=<abiName> --privatekey=<PRIVATEKEY> --network=<NETWORK>`](#eth-contract-address---abiabiname---privatekeyprivatekey---networknetwork)
- [`eth ens <ADDRESS>`](#eth-ens-address)
- [`eth events <ADDRESS>`](#eth-events-address)
- [`eth generate`](#eth-generate)
- [`eth getabi NAME`](#eth-getabi-name)
- [`eth removeabi NAME`](#eth-removeabi-name)
- [`eth resolvename NAME`](#eth-resolvename-name)
- [`eth transaction HASH --network=<NETWORK>`](#eth-transaction-hash---networknetwork)
- [`eth transactions ADDRESS --network=<NETWORK>`](#eth-transactions-address---networknetwork)
- [`eth transfer <ADDRESS> <AMOUNT> --privatekey=<PRIVATEKEY> --network=<NETWORK>`](#eth-transfer-address-amount---privatekeyprivatekey---networknetwork)
- [`eth updateab1 NAME PATH`](#eth-updateabi-name-path)
- [`eth watchtransactions <ADDRESS>`](#eth-watchtransactions-address)


## `eth abis`

gets all abi names in storage

```
USAGE
  $ eth abis

ARGUMENTS
  none

DESCRIPTION
 Retrieves all ABI names in storage.

EXAMPLES
  $ eth abis
```

## `eth addabi NAME PATH`

adds an abi json file to storage

```
USAGE
  $ eth addabi NAME PATH

ARGUMENTS
  NAME - Name of the ABI contract
  PATH - Location of the ABI file

DESCRIPTION
  Adds an ABI JSON file to storage.

EXAMPLES
  $ eth addabi erc20abi ./abis/erc20abi.json
```

## `eth balance <ADDRESS || ENS> --network=<NETWORK>`

gets the eth balance of an address

```
USAGE
  $ eth balance <ADDRESS || ENS> --network=<NETWORK>

ARGUMENTS
  ADDRESS - Wallet address
  ENS - ENS of the wallet address
  NETWORK - Network name

DESCRIPTION
  gets the eth balance of an address

EXAMPLES
  $ eth balance michael001.eth
  $ eth balance myande.eth --network=sepolia
```

## `eth contract <ADDRESS> --abi=<abiName> --privatekey=<PRIVATEKEY> --network=<NETWORK>`

gets a contract instance and opens an environment to interact with the contract

```
USAGE
  $ eth contract <ADDRESS> --abi=<abiName> --privatekey=<PRIVATEKEY> --network=<NETWORK>

ARGUMENTS
  ADDRESS - Contract address
  PRIVATEKEY - Private key of the wallet to sign transactions
  NETWORK - Network name

DESCRIPTION
  Gets a contract instance and opens an environment to interact with the contract.

EXAMPLES
  $ eth contract 0x0000000000000000000000000000000000001111 --abi=erc20abi --privatekey=0x00000000000000000000000000000000000000000000001111 --network=sepolia
  > await contract.name()
  > await contract.totalSupply()
```

## `eth ens <ADDRESS>`

gets the ens name of a wallet address

```
USAGE
  $ eth ens <ADDRESS>

ARGUMENTS
  ADDRESS - wallet address
  
DESCRIPTION
  gets the ens name of a wallet address

EXAMPLES
  $ eth ens 0x0000000000000000000000000000000000001111
```

## `eth events <ADDRESS>`

gets the log of past events of a contract address

```
USAGE
  $ eth events <ADDRESS>

ARGUMENTS
  ADDRESS - contract address
  
DESCRIPTION
  gets the log of past events of a contract address

EXAMPLES
  $ eth events 0x0000000000000000000000000000000000001111
  $ eth events 0xsafe.eth

```


## `eth generate`

generates a random wallet address with its privatekey and mnemonic phrase

```
USAGE
  $ eth generate
  $ eth generate --export

ARGUMENTS
  none
  
DESCRIPTION
  gets the log of past events of a contract address

EXAMPLES
  $ eth generate --export

```

## `eth getabi NAME`

gets an abi from storage

```
USAGE
  $ eth getabi NAME

ARGUMENTS
  NAME - name of the abi in storage
  
DESCRIPTION
  gets an abi from storage

EXAMPLES
  $ eth getabi erc20abi

```

## `eth removeabi NAME`

removes an abi from storage

```
USAGE
  $ eth removeabi NAME 

ARGUMENTS
  NAME - abi name
  
DESCRIPTION
  removes an abi from storage

EXAMPLES
  $ eth removeabi erc20abi

```

## `eth resolvename NAME`

resolves an ens name and gives the address

```
USAGE
  $ eth resolvename NAME

ARGUMENTS
  NAME - ens name
  
DESCRIPTION
  resolves an ens name and gives the address

EXAMPLES
  $ eth resolvename michael001.eth

```

## `eth transaction HASH --network=<NETWORK>`

gets the transaction log of a transaction hash

```
USAGE
  $ eth transaction HASH --network=<NETWORK>
  $ eth transaction HASH 

ARGUMENTS
  HASH - transaction hash
  NETWORK - network name
  
DESCRIPTION
  gets the transaction log of a transaction hash

EXAMPLES
  $ eth transaction 0xc4fd8a76acef6abf75f3272fc3a08a480504d3770797b0c9458abc1f1717d46a
  $ eth transaction 0xc4fd8a76acef6abf75f3272fc3a08a480504d3770797b0c9458abc1f1717d46a --network=optimism

```

## `eth transactions ADDRESS --network=<NETWORK>`

gets all transaction logs of a wallet address

```
USAGE
  $ eth transaction ADDRESS --network=<NETWORK>
  $ eth transaction ADDRESS 

ARGUMENTS
  ADDRESS - wallet address
  NETWORK - network name
  
DESCRIPTION
  gets all transaction logs of a wallet address

EXAMPLES
  $ eth transaction michael001.eth
  $ eth transaction myande.eth --network=polygon

```


## `eth transfer <ADDRESS> <AMOUNT> --privatekey=<PRIVATEKEY> --network=<NETWORK>`

transfers an amount of eth to a wallet address

```
USAGE
  $ eth transfer <ADDRESS> <AMOUNT> --privatekey=<PRIVATEKEY> --network=<NETWORK>
  $ eth transfer <ADDRESS> <AMOUNT> --privatekey=<PRIVATEKEY>

ARGUMENTS
  ADDRESS - receiver wallet address
  AMOUNT - Amount of eth to send
  PRIVATEKEY - private key of sender wallet address
  NETWORK - network name
  
DESCRIPTION
  resolves an ens name and gives the address

EXAMPLES
  $ eth transfer michael001.eth 1 --privatekey=0xc4fd8a76acef6abf75f3272fc3a08a480504d3770797b0c9458abc0000000000
  $ eth transfer myande.eth 1 --privatekey=0xc4fd8a76acef6abf75f3272fc3a08a480504d3770797b0c9458abc0000000000 --network=sepolia
```


## `eth updateabi NAME PATH`

update an abi already in storage

```
USAGE
  $ eth updateabi NAME PATH

ARGUMENTS
  NAME - name of the abi contract
  PATH - location of the abi file

DESCRIPTION
  update an abi already in storage

EXAMPLES
  $ eth update erc20abi ./abis/erc20abi.json
```

## `eth watchtransactions <ADDRESS>`

watch all pending transactions on eth mainnet or transactions specific to an address

```
USAGE
  $ eth watchtransactions <ADDRESS>
  $ eth watchtransactions 

ARGUMENTS
  ADDRESS - wallet address 

DESCRIPTION
  watch all pending transactions on eth mainnet or transactions specific to an address

EXAMPLES
  $ eth watchtransactions
```

# Networks

- mainnet
- goerli
- sepolia
- arbitrum
- arbitrumGoerli
- optimism
- optimismGoerli
- polygon
- polygonMumbai
