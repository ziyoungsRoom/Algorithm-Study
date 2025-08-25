// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 57656 KB , 시간 : 416 ms

// 문제 : 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const points = input.slice(1).map(line => line.split(" ").map(Number));

points.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    return a[0] - b[0];
});

console.log(points.map(p => p.join(" ")).join("\n"));