const ContractKit = require('@celo/contractkit');

async function interactWithContract() {
    const kit = ContractKit.newKit('https://<celo-network-url>');

    // Set the appropriate network URL (e.g., Alfajores testnet: https://alfajores-forno.celo-testnet.org)

    // Set the private key for your Celo account
    const privateKey = '<your-private-key>';
    const account = kit.web3.eth.accounts.privateKeyToAccount(privateKey);

    // Add your account to the kit instance
    kit.addAccount(account.privateKey);

    // Get an instance of the deployed smart contract
    const contractAddress = '<deployed-contract-address>';
    const contract = new kit.web3.eth.Contract(<contract-abi>, contractAddress);

    // Interact with the smart contract using contract.methods

    // Example: Call a function that retrieves a value from the smart contract
    const result = await contract.methods.getString().call();
    console.log('Value retrieved from the smart contract:', result);

    // Example: Call a function that sets a new value in the smart contract
    await contract.methods.setString('New Value').send({ from: account.address });

    // Example: Call the getter function again to verify the updated value
    const updatedResult = await contract.methods.getString().call();
    console.log('Updated value from the smart contract:', updatedResult);
}

interactWithContract();