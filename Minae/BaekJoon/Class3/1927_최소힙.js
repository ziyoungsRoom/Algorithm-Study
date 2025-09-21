// 언어: JavaScript, (성공/실패): 1/8, 메모리: 26,184 KB, 시간: 208 ms

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 명령의 개수
const N = parseInt(input[0]);
// 최소 힙 배열(인덱스 1부터 시작하기 위해 0번 자리에 null 삽입)
const heap = [null];

// 힙에 값 삽입하는 함수
function insert(value) {
  // 새로운 값을 힙의 끝에 추가
  heap.push(value);
  // 현재 노드의 인덱스
  let index = heap.length - 1;

  // 부모와 비교하여 위로 올라가기(heapify-up)
  while (index > 1) {
    // 부모 노드의 인덱스 계산
    const parentIndex = Math.floor(index / 2);

    if (heap[parentIndex] > heap[index]) {
      // 부모가 더 크면 부모와 교환
      [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    } else {
      // 부모가 더 작거나 같으면 멈춤
      break;
    }
    // 한 단계 위로 이동
    index = parentIndex;
  }
}

function remove() {
  // 힙이 비어있으면 0 반환
  if (heap.length === 1) return 0;
  // 원소가 하나뿐이면 바로 반환
  if (heap.length === 2) return heap.pop();

  // 루트(최솟값) 저장
  const minValue = heap[1];
  // 마지막 원소를 루트로 올림
  heap[1] = heap.pop();

  let index = 1;
  // 루트부터 내려가며 정리 (heapify-down)
  while (index * 2 < heap.length) {
    const leftChild = index * 2;
    const rightChild = index * 2 + 1;

    // 기본적으로 왼쪽 자식을 작은 자식으로 설정
    let smallChild = leftChild;

    if (rightChild < heap.length && heap[rightChild] < heap[leftChild]) {
      // 오른쪽 자식이 더 작으면 작은 자식 갱신
      smallChild = rightChild;
    }

    if (heap[index] > heap[smallChild]) {
      // 부모가 더 크면 작은 자식과 교환
      [heap[index], heap[smallChild]] = [heap[smallChild], heap[index]];
      // 한 단계 아래로 이동
      index = smallChild;
    } else {
      // 힙 조건 만족 → 종료
      break;
    }
  }
  // 최솟값 반환
  return minValue;
}

// 출력할 결과를 담는 배열
const result = [];

for (let i = 1; i <= N; i++) {
  // 입력 값 읽기
  const x = parseInt(input[i]);

  if (x === 0) {
    // 0이면 최소값 출력
    result.push(remove());
  } else {
    // 0이 아니면 힙에 삽입
    insert(x);
  }
}

console.log(result.join("\n"));
