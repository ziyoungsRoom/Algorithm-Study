// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 9324 KB , 시간 : 96 ms

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

// 변수 형변환
const A = Number(input[0]);
const B = Number(input[1]);

// if 조건문을 통해 결과 출력
if (A > B) console.log(">");
else if (A < B) console.log("<");
else console.log("==");
