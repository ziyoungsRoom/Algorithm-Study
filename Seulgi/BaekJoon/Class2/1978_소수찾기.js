// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9352 KB , 시간 : 92 ms

// 문제 : 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = parseInt(input[0]);
const numbers = input[1].split(" ").map(Number);

function isPrime(num) {
    if (num === 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}

let count = 0;
for (let n of numbers) {
    if (isPrime(n)) count++;
}

console.log(count);