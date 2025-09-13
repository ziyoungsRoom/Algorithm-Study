// 언어: JavaScript, (성공/실패): 1/0, 메모리: 9,384 KB, 시간: 92 ms

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 컵퓨터의 총 개수
const computerCount = parseInt(input[0]);
// 네트워크 연결 개수
const connectionCount = parseInt(input[1]);

// 각 컴퓨너의 연결 정보를 저장할 2차원 배열
let connections = [];
// 0번부터 computerCount번까지 빈 병ㄹ로 초기화(1~computerCount번 컴퓨터 사용)
for (let i = 0; i <= computerCount; i++) {
  connections[i] = [];
}

// 세 번째 줄부터 연결 정보 처리(input[2]부터 input[connectionCount + 1]까지)
for (let i = 2; i <= connectionCount + 1; i++) {
  // "1 2"같은 문자열을 공백으로 나누어 배열로 만들기
  let parts = input[i].split(" ");
  // 첫 번째 컴퓨터 번호
  let a = parseInt(parts[0]);
  // 두 번째 컴퓨터 번호
  let b = parseInt(parts[1]);

  // a번 컴퓨터의 연결 목록에 b 추가(양방향)
  connections[a].push(b);
  // b번 컴퓨터의 연결 목록에 a 추가(양방향)
  connections[b].push(a);
}

// 각 컴퓨터의 방문 여부를 체크하는 배열(처음엔 모두 false)
let visited = new Array(computerCount + 1).fill(false);
// 1번 컴퓨터를 제외한 감염된 컴퓨터의 개수
let count = 0;

// DFS(깊이우선탐색) 함수 - 바이러스가 퍼지는 과정을 재귀로 구현
function virus(computerNum) {
  // 이미 방문한 컴퓨터라면 더 이상 진행하지 않고 종료
  if (visited[computerNum]) return;

  // 현재 컴퓨터를 방문했다고 표시
  visited[computerNum] = true;
  // 1번 컴퓨터가 아닌 경우에만 카운트 증가(1번은 최초 감염이므로 제외)
  if (computerNum !== 1) count++;

  // 현재 컴퓨터와 연결된 모든 컴퓨터들에 대해
  for (let next of connections[computerNum]) {
    // 각각 바이러스 감염 시도(재귀 호출)
    virus(next);
  }
}

// 1번 컴퓨터부터 바이러스 감염 시작
virus(1);
console.log(count);
