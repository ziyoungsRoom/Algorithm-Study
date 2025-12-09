// 언어 : Javascript , (성공/실패) : 2/1 , 메모리 : 26964 KB , 시간 : 224 ms

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

const result = [];
const visited = Array(N).fill(false);

const backtrack = (arr) => {
  if (arr.length === M) {
    result.push(arr.join(' '));
    return;
  }

  // 중복 순열 문제이기 때문에 0부터 N-1까지 반복
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      // 중복된 값을 넣지 않도록 visited[i]가 true인 상태로 재귀 호출
      backtrack([...arr, nums[i]]);
      visited[i] = false;
    }
  }
};

backtrack([]);

console.log(result.join('\n'));
