require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food warfare dash mushroom protect grunt light army gentle'; 
let testAccounts = [
"0xd7b49cf8cdd794691723c0d735e733e369dea078fb818a0552d7e08a0210c634",
"0x130a23c0a5ddea034688236194055efdc3cbfc22eb7c375cad1cb584e5e674e2",
"0xf7d4ac83195865c5b0d3d36bc17b79c5fc387918ed8929ab4ef985fd92ba2dd6",
"0xd88d98a333d35f32d49a71a6d20deb72ccc25cff99e884d8b65e6029b062c785",
"0x9565c195c74994c53c75e081cc914a3a746cd64300bf344e5df8b44754b9ae5a",
"0xd4d1e7b294b73ca595f9364ee031c812a7fe64a13d93f70b5de693eb73140cb0",
"0x7763d05a7c5b8e9c1e74137452a258744c6e559ad56f87b959239205b92488c4",
"0xfefe1a3af70b316dfe7ded913867fd65367fb95fb324d92f8f5807e4d7f08b82",
"0x77783b602e7903fe5e43e9e6564f0c6a54995c6d6068ec421500a1d8b1e24174",
"0xaf2ab8d99ca2f66c4ea7577c518afbb51d73f727b41ac0386ff57ec882373302"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
