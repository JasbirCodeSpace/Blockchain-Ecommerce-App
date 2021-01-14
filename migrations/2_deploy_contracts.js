const Dai = artifacts.require('Dai.sol');
const PaymentProcessor = artifacts.require('PaymentProcessor.sol');

module.exports = async function (deployer, network, addresses) {
    const [admin, payer, _] = addresses;
    if (network === "develop") {
        await deployer.deploy(Dai); // sends the transaction
        const dai = await Dai.deployed(); // wait for transaction to be mined
        await dai.faucet(payer, web3.utils.toWei('10000')); // creating tokens for payer so that he can buy something
        await deployer.deploy(PaymentProcessor, admin, dai.address);

    } else {
        const ADMIN_ADDRESS = '';
        const DAI_ADDRESS = '';
        await deployer.deploy(PaymentProcessor, ADMIN_ADDRESS, DAI_ADDRESS);
    }
};
