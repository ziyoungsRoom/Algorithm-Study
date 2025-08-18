// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9596 KB , 시간 : 100 ms

// 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let line of input) {
    const [a, b] = line.split(' ').map(Number);
    if(a===0 && b===0) break;
    console.log(a + b);
}