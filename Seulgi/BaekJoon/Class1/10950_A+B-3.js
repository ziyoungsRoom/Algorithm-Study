// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9600 KB , 시간 : 100 ms

// 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for(let i = 1; i <= T; i++){
    const [a, b] = input[i].split(' ').map(Number);
    console.log(a + b);
}