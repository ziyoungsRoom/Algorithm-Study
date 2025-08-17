// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9608 KB , 시간 : 96 ms

// 문제 : 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function gcd(x, y) {
    while ( y !== 0) {
        let temp = x % y;
        x = y;
        y = temp;
    }
    return x;
}

const g = gcd(a, b);
const l = (a * b) / g;

console.log(g);
console.log(l);