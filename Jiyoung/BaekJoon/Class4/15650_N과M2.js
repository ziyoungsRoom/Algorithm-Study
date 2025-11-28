// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9380 KB , 시간 : 92 ms

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const [N, M] = input.map(Number);
const result = [];
const nums = Array.from({ length: N }, (_, i) => i + 1);

const backtracking = (start, arr) => {
  if (arr.length === M) {
    result.push(arr);
    return;
  }
  // start부터 N까지 반복
  for (let i = start; i < N; i++) {
    // 선택한 수 + 1하여 중복 선택되지 않도록 재귀 호출
    backtracking(i + 1, [...arr, nums[i]]);
  }
};

backtracking(0, []);

console.log(result.map((value) => value.join(' ')).join('\n'));
