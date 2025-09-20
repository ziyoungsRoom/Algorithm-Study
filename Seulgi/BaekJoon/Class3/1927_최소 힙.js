// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 23268 KB , 시간 : 212 ms

// 문제 : 널리 잘 알려진 자료구조 중 최소 힙이 있다. 최소 힙을 이용하여 다음과 같은 연산을 지원하는 프로그램을 작성하시오.
// 1.배열에 자연수 x를 넣는다.
// 2.배열에서 가장 작은 값을 출력하고, 그 값을 배열에서 제거한다.
// 프로그램은 처음에 비어있는 배열에서 시작하게 된다.
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 최소 힙 클래스 (작은 값이 위로 오는 트리)
class MinHeap {
  constructor() {
    // 인덱스 0은 비워두고 1부터 사용 (부모-자식 계산 편하게)
    // 부모: Math.floor(i/2), 왼쪽자식: i*2, 오른쪽자식: i*2+1
    this.heap = [null];
  }

  // 값 넣기: 맨 뒤에 넣고 → 위로 올리기
  push(value) {
    // 1. 일단 맨 뒤에 넣기
    this.heap.push(value);

    // 2. 부모와 비교하며 위로 올리기 (bubbleUp)
    let currentIdx = this.heap.length - 1; // 방금 넣은 위치
    let parentIdx = Math.floor(currentIdx / 2); // 부모 위치

    // 부모보다 작으면 계속 위로 (루트는 인덱스 1)
    while (currentIdx > 1 && this.heap[parentIdx] > this.heap[currentIdx]) {
      // 부모와 자리 바꾸기
      [this.heap[parentIdx], this.heap[currentIdx]] = [
        this.heap[currentIdx],
        this.heap[parentIdx],
      ];

      // 인덱스 업데이트
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  // 최솟값 빼기: 루트 제거 → 마지막 걸 루트로 → 아래로 내리기
  pop() {
    // 비어있으면 0 반환
    if (this.heap.length === 1) return 0;

    // 원소 1개만 있으면 그냥 빼기
    if (this.heap.length === 2) return this.heap.pop();

    // 1. 최솟값(루트) 저장
    const minValue = this.heap[1];

    // 2. 마지막 원소를 루트로 옮기기
    this.heap[1] = this.heap.pop();

    // 3. 자식과 비교하며 아래로 내리기 (bubbleDown)
    let currentIdx = 1;
    let leftChildIdx = 2;
    let rightChildIdx = 3;

    // 왼쪽 자식이 있는 동안 반복
    while (leftChildIdx < this.heap.length) {
      // 더 작은 자식 찾기
      let smallerChildIdx = leftChildIdx;

      // 오른쪽 자식도 있고, 오른쪽이 더 작으면
      if (
        rightChildIdx < this.heap.length &&
        this.heap[rightChildIdx] < this.heap[leftChildIdx]
      ) {
        smallerChildIdx = rightChildIdx;
      }

      // 현재 노드가 자식보다 작거나 같으면 멈추기
      if (this.heap[currentIdx] <= this.heap[smallerChildIdx]) break;

      // 더 작은 자식과 자리 바꾸기
      [this.heap[currentIdx], this.heap[smallerChildIdx]] = [
        this.heap[smallerChildIdx],
        this.heap[currentIdx],
      ];

      // 인덱스 업데이트
      currentIdx = smallerChildIdx;
      leftChildIdx = currentIdx * 2;
      rightChildIdx = currentIdx * 2 + 1;
    }

    return minValue;
  }
}

// ===== 메인 코드 =====
const N = Number(input[0]); // 연산 개수
const heap = new MinHeap(); // 최소 힙 생성
const result = []; // 출력할 결과들

// 각 연산 처리
for (let i = 1; i <= N; i++) {
  const x = Number(input[i]);

  if (x === 0) {
    // 0이면: 최솟값 출력 & 제거
    result.push(heap.pop());
  } else {
    // 자연수면: 힙에 추가
    heap.push(x);
  }
}

// 결과 출력
console.log(result.join("\n"));
