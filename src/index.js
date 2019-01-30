var SHA256 = require("crypto-js/sha256")

const text = "Julian"
const hash = SHA256(text).toString()

console.log()
console.log("Text: ", text)
console.log("Hash: ", hash)

console.log("Länge: ", text.length)
console.log("Länge: ", hash.length)
