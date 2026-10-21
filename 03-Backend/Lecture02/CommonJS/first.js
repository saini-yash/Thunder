const {payment, hello} = require("./second.js")
const {add, sub} = require("./third.js")

console.log("Payment is processing...");

let a = 10;
let b = 20;

payment(500);
hello();
add();
sub();

console.log(a + b);