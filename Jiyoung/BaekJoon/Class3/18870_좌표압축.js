// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 321644 KB , 시간 : 1508 ms

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

input.shift();

const nums = input[0].split(' ').map(Number);

// Set : 중복 제거
const sortedUniqueNums = [...new Set(nums)].sort((a, b) => a - b);

const indexMap = new Map();

// Map : [값, 인덱스] 형태로 저장
sortedUniqueNums.forEach((num, index) => {
  indexMap.set(num, index);
});

// Map.get()을 이용해 각 숫자의 인덱스 찾기
// 시간복잡도 : Map.get() -> O(1) / indexOf() -> O(N)
const result = nums.map((num) => indexMap.get(num));

console.log(result.join(' '));
