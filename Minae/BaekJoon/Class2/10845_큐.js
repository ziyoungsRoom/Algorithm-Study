// 언어: JavaScript, (성공/실패): 1/8, 메모리: 12,056 KB, 시간: 104 ms
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const [N, ...commands] = input;

// 큐 역할을 할 배열
const queue = [];
// 큐의 실제 시작점을 가리키는 인덱스
let front = 0;
// 출력할 결과물 배열
const result = [];

for (let i = 0; i < N; i++) {
  // 명령어를 공백으로 분리
  const command = commands[i].split(" ");

  // 첫 번째 단어로 명령어 종류 구분
  switch (command[0]) {
    // 큐 뒤쪽에 요소 추가
    case "push":
      queue.push(command[1]);
      break;
    case "pop":
      // 큐가 비어있는지 확인 (전체 길이 - front 인덱스)
      if (queue.length - front === 0) {
        result.push(-1);
      } else {
        // front 위치의 요소 출력
        result.push(queue[front]);
        // front 인덱스를 앞으로 이동
        front++;
      }
      break;
    case "size":
      // 현재 큐의 실제 크기 (전체 길이 - 제거된 요소 개수)
      result.push(queue.length - front);
      break;
    case "empty":
      // 큐가 비어있으면 1, 아니면 0
      result.push(queue.length - front === 0 ? 1 : 0);
      break;
    case "front":
      // 큐의 맨 앞 요소 확인
      result.push(queue.length - front === 0 ? -1 : queue[front]);
      break;
    case "back":
      // 큐의 맨 뒤 요소 확인 (항상 배열의 마지막 요소)
      result.push(queue.length - front === 0 ? -1 : queue[queue.length - 1]);
      break;
  }
}

console.log(result.join("\n"));
