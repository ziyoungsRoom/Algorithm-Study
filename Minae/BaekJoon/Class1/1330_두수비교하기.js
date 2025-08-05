// 언어 : Javascript , (성공/실패) : 3/1 , 메모리 : 9332 KB , 시간 : 92 ms
const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

if (A > B) console.log(">");
if (A < B) console.log("<");
if (A === B) console.log("==");
