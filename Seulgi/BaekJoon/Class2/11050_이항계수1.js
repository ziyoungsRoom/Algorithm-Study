// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9336 KB , 시간 : 100 ms

// 문제 : 자연수 N과 정수 K가 주어졌을 때 이항 계수 (N K)를 구하는 프로그램을 작성하시오.
const fs = require('fs');
const [N, K] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const answer = factorial(N) / (factorial(K) * factorial(N - K));
console.log(answer);