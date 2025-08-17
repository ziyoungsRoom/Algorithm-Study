// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 9604 KB , 시간 : 92 ms

// 문제 : 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.
const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
console.log(a / b);

/* 알아야 할 사항 : 백준에서 입력 받는 방법 (fs 모듈 사용)
1. 파일 읽기
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);

2. 파일 쓰기
const output = require('fs').writeFileSync(process.platform === "linux" ? "/dev/stdout" : "./output.txt", "Hello, World!");

3. 파일 읽기 및 쓰기
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
const output = require('fs').writeFileSync(process.platform === "linux" ? "/dev/stdout" : "./output.txt", "Hello, World!");
*/