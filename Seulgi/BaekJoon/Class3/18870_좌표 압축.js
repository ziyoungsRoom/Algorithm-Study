// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 319968 KB , 시간 : 1504 ms

// 문제 : 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
// Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같다.
// 좌표 Xi를 압축한 결과 X'i의 값을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const coords = input[1].split(" ").map(Number);

// 1단계: 중복 제거하고 정렬하기
const uniqueSorted = [...new Set(coords)].sort((a, b) => a - b);

// 2단계: Map을 사용해서 압축값 저장
// Map { -10 => 0, -9 => 1, 2 => 2, 4 => 3 }
const compressMap = new Map();
uniqueSorted.forEach((value, index) => {
  compressMap.set(value, index); // 각 값에 순서(인덱스) 부여
});

// 3단계: 원본 배열을 압축된 값으로 변환
const result = coords.map((coord) => compressMap.get(coord));

// 결과 출력
console.log(result.join(" "));
