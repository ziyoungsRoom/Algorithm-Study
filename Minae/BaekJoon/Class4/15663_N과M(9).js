// 언어: JavaScript, (성공/실패): (1/5), 메모리: 13,784 KB, 시간: 908 ms

const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// 사전순 출력을 위해 정렬
arr.sort((a, b) => a - b);
// 현재까지 선택된 숫자를 저장할 배열
const selected = [];
// arr의 각 인덱스(요소)를 사용했는지 체크 -> 같은 요소를 두번 선택 불가
const visited = Array(N).fill(false);

function backtrack(depth) {
  // M개의 숫자를 모두 선택한 경우 -> 출력
  if (depth === M) {
    console.log(selected.join(' '));
    return;
  }

  // 이 depth에서 이미 사용한 "값"을 기록하는 Set
  // 같은 depth에서 값이 같으면 새로운 분기 생성 금지 -> 중복 수열 방지
  let used = new Set();

  // 배열의 모든 요소를 순회하며 선택을 시도
  for (let i = 0; i < N; i++) {
    const num = arr[i];

    // 같은 인덱스의 숫자는 한 번만 선택 가능 -> 각 요소는 최대 한 번만 사용
    if (visited[i]) continue;

    // 같은 depth에서 같은 값으로 시작하는 분기 중복 방지
    if (used.has(num)) continue;
    used.add(num);

    // 선택 처리
    visited[i] = true;
    selected.push(num);

    // 다음 depth 로 이동
    backtrack(depth + 1);

    // 선택 취소(백트래킹)
    selected.pop();
    visited[i] = false;
  }
}

backtrack(0);
