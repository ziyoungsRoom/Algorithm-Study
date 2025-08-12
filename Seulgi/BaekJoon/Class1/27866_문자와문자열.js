// 문제 : 단어 S와 정수 i가 주어졌을 때, S의 i번째 글자를 출력하는 프로그램을 작성하시오.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const text = input[0];
const position = Number(input[1]);

console.log(text[position - 1]);