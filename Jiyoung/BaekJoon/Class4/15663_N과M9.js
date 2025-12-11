// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 15772 KB , 시간 : 184 ms

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const visited = new Array(N).fill(false);
const result = [];

const backtracking = (arr) => {
  let prev = null;

  if (arr.length === M) {
    result.push(arr.join(' '));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    if (nums[i] === prev) continue;
    prev = nums[i];

    visited[i] = true;
    backtracking([...arr, nums[i]]);
    visited[i] = false;
  }
};

backtracking([]);

console.log(result.join('\n'));
