// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9428 KB , 시간 : 96 ms

// 문제 : 정수 N이 주어졌을 때, 앞뒤로 읽어도 같은 수(팰린드롬)인지 판별하는 프로그램을 작성하시오.
// 입력은 여러 줄로 주어지며, 마지막 입력 0은 종료를 의미한다.
// 각 수가 팰린드롬이면 “yes”, 아니면 “no”를 출력한다.
const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

for (const line of lines) {
    const s = line.trim();
    if (s == "0") break;
    const rev = s.split("").reverse().join("");
    console.log(s == rev ? "yes" : "no");
}