console.log("module utama - sebelum require module user");
const user = require("./user");
console.log("module utama - setelah require module user");

console.log("module utama - sebelum require module product");
const product = require("./product");
console.log("module utama - setelah require module product");

console.log("module utama - sebelum require module order");
const order = require("./order");
console.log("module utama - setelah require module order");
