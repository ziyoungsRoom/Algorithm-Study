// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 49428 KB , 시간 : 312 ms

// 문제 : N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.
const fs = require("fs");
const tok = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = tok[0];
const A = tok.slice(1, 1 + n).sort((a, b) => a - b); 
const m = tok[1 + n];
const queries = tok.slice(2 + n, 2 + n + m);

function exists(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;          
    if (arr[mid] === target) return true;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return false;
}

let out = [];
for (const x of queries) {               
  out.push(exists(A, x) ? "1" : "0");
}
console.log(out.join("\n"));