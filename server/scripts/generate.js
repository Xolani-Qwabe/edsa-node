const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, fromHex, utf8ToBytes, bytesToHex } = require("ethereum-cryptography/utils");

// Generate a random private key
const generatePrivateKey = () => {
  return secp256k1.utils.randomPrivateKey();
};

// Generate the corresponding public key from the private key
const generatePublicKey = (privateKey) => {
  return secp256k1.getPublicKey(privateKey);
};

// Generate the Ethereum address from the public key
const getAddress = (publicKey) => {
  const address = keccak256(publicKey.slice(1)); // remove the 0x04 prefix
  return `0x${bytesToHex(address.slice(-20))}`; // Use the last 20 bytes to form the address
};

const privateKey = generatePrivateKey();
const publicKey = generatePublicKey(privateKey);
const address = getAddress(publicKey);

console.log(`Private key: ${toHex(privateKey)} generated!`);
console.log(`Public key: ${toHex(publicKey)} generated from private key: ${toHex(privateKey)} `);
console.log(`Ethereum Address: ${address}`);