var SHA256 = require("crypto-js/sha256")

const text = "Gummibärchen"
const hash = SHA256(text).toString()

console.log()
console.log("Text: ", text)
console.log("Hash: ", hash)
