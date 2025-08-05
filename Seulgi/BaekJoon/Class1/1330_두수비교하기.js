// 문제 : 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(a > b ? '>' : a < b ? '<' : '==');
