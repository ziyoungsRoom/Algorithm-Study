// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 18456 KB , 시간 : 196 ms

// 문제 : 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
// 1. 길이가 짧은 것부터
// 2. 길이가 같으면 사전 순으로
// 단, 중복된 단어는 하나만 남기고 제거해야 한다.
const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const n = Number(lines[0]);
const words = lines.slice(1);

const unique = Array.from(new Set(words));

unique.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a < b ? -1 : a > b ? 1 : 0;
});

console.log(unique.join("\n"));