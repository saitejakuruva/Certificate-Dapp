import Web3 from 'web3';
let web3;
if(typeof window != 'undefined' && typeof window.web3 != 'undefined'){
   web3 = new Web3(window.web3.currentProvider);
}
else{
const provider = new Web3.providers.HttpProvider(
  'https://rinkeby.infura.io/v3/14a6144786774f5fbbad6c0ef7037b5f'
);
web3 = new Web3(provider);
}


export default web3;
