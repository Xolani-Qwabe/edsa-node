const {secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const generatePrivateKey = () => {
    return secp256k1.utils.randomPrivateKey();
};

const generatePublicKey = (privateKey)=>{
    return secp256k1.getPublicKey(privateKey);
}


const privateKey = generatePrivateKey()
const publicKey = generatePublicKey(privateKey)

console.log(`Private key : ${toHex(privateKey)} generated!`);
console.log(`Public key: ${toHex(publicKey)} generated from private key: ${toHex(privateKey)} `)

module.exports = { generatePrivateKey };
