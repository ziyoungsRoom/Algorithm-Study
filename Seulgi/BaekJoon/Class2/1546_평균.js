// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9656 KB , 시간 : 96 ms

// 문제 : 주어진 점수들을 최고점을 기준으로 100점 만점 환산한 후 평균을 구하는 문제
// 1. 시험 점수들 중 최댓값 M을 찾는다
// 2. 각 점수를 (점수 / M * 100) 으로 변환한다
// 3. 변환된 점수들의 평균을 출력한다
const fs = require("fs");
const tokens = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const N = tokens[0];
const scores = tokens.slice(1);

const M = Math.max(...scores);
const sum = scores.reduce((a, b) => a + b, 0);
const newAvg = (sum / N) / M * 100;

console.log(newAvg);