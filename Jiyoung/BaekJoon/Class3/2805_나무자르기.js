// 언어 : Javascript , (성공/실패) : 3/1 , 메모리 : 125364 KB , 시간 : 552 ms

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

function parametricSearch(arr, M) {
  let left = 0;
  let right = 0;

  // right: 최대값
  // 시간복잡도를 낮추기 위해 Math.max() 사용 X => for 문으로 처리
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > right) right = arr[i];
  }

  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // sum : 잘라야 하는 나무의 길이 합
    // 시간복잡도를 낮추기 위해 reduce 사용 X => for 문으로 처리
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) sum += arr[i] - mid;
    }

    // 잘라야 하는 나무의 길이 합 비교 후 mid 값 변경
    if (sum >= M) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

console.log(parametricSearch(trees, M));
