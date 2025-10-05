// 언어: JavaScript, (성공/실패): 1/1, 메모리: 325,396 KB, 시간: 1420 ms
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => a - b);
// 1) Set으로 중복 제거
// 2) Array.from으로 다시 배열로 변환
// 3) sort로 오름차순 정렬

const rank = new Map();
// Map 생성: 값 -> 압축된 좌표를 저장할 공간

uniqueSorted.forEach((value, index) => {
  rank.set(value, index);
  // 각 값(value)을 Map에 저장
  // key = 값, value = 압축 좌표(정렬된 위치 index)
});

const result = arr.map((x) => rank.get(x));
// 원래 배열 순서대로 Map에서 압축 좌표 가져오기

console.log(result.join(" "));
