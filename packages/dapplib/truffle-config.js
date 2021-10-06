require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember assume grid kitchen orange treat'; 
let testAccounts = [
"0x0640f75b83fa31964e45529797909b07bfa547d7cfd48173c51ec18aa3e67d91",
"0x31945d1b3cf0ac5fc228a41386d723dea22c84ff52c00a5361404411efb670e5",
"0xc8b1334b33a9223b288a74c51674fe2b57ef57a092ab99b8f4fbb3c48947a7ac",
"0x6a5d899e09d254e0066874d2990d0331ce9605071a953e35ef2a2e2999c162d2",
"0xae7178480e6afc7a91e81652ad1ccb4ed35e71972c2d6ca01dc9a085be487b7a",
"0xeb2a2ab35fd8571890a8918d5dbd1da5b195158e55df7a56f7ed14778a7d79f0",
"0xd41fdd7362c7ac8be7f57b43045f22559fbf28624a0d403d30bd03815d1b87b8",
"0xe216b6923de77935f69b17806d945e5966a5964770fb5a650a838420420ac8ca",
"0x8b107e92c4d45f383474049668524764216c34285e65874a35e6030570cd6df7",
"0x59cb1f07d96b8e00ba0dd05ab3f86880eff45cc3691013cfe08b333054b1ba73"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

