// 언어: JavaScript, (성공/실패): (1/1), 메모리: KB, 시간: ms
const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(/\s+/)
  .map(Number);

const [N, M, ...nums] = input;

// 수열을 사전순으로 출력해야 하로 먼저 정렬
nums.sort((a, b) => a - b);

// 현재까지 선택한 숫자를 저장하는 배열
const selected = [];
// 각 숫자를 사용했는지 체크하는 배열(nums 인덱스 기준)
const visited = Array(N).fill(false);
// 완성된 수열 문자열을 저장할 배열
let result = [];

function backtrack(depth) {
  // depth가 M이 되면 길이 M짜리 수열이 완성된 상태
  if (depth === M) {
    // 선택한 M개의 숫자를 문자열로 만들어 결과에 저장
    result.push(selected.join(''));
    return;
  }

  // N개의 숫자를 모두 확인하면서 하나씩 선택
  for (let i = 0; i < N; i++) {
    // 아직 사용하지 않은 숫자라면 사용 가능
    if (!visited[i]) {
      visited[i] = true; // 이 숫자를 사용 처리
      selected.push(nums[i]); // 현재 수열에 숫자 추가

      backtrack(depth + 1); // 다음 깊이로 이동(재귀)

      selected.pop(); //수열에서 숫자 제거(백트래킹)
      visited[i] = false; // 사용 여부 되돌리기
    }
  }
}

// 백트래킹 시작
backtrack(0);
console.log(result.join('\n'));
