// import sha256 from 'crypto-js/sha256';

// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';

// const message, nonce, path, privateKey;
// const hashDigest = sha256(nonce + message);
// const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));

var SHA256 = require("crypto-js/sha256");

const text = "Hallo"
const hash = SHA256(text).toString()

console.log();
console.log("Text: ", text);
console.log("Hash: ", hash);
