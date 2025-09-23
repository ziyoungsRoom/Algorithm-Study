// 언어 : Javascript , (성공/실패) : 1/5 , 메모리 : 27516 KB , 시간 : 232 ms

// 최소 힙 클래스 구현
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 값 추가
  insert(value) {
    this.heap.push(value); // 맨 뒤에 추가
    this.heapifyUp(); // 위로 올려서 최소 힙 성질 맞추기
  }

  // 가장 작은 값 꺼내기
  extractMin() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0]; // 최소값
    this.heap[0] = this.heap.pop(); // 마지막 원소를 루트로 올림
    this.heapifyDown(); // 아래로 내려서 자리 잡기
    return min;
  }

  // 위로 올리기
  heapifyUp() {
    let index = this.heap.length - 1; // 새로 넣은 값 위치
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break; // 부모가 더 작으면 끝
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  // 아래로 내리기
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (index * 2 + 1 < length) {
      // 왼쪽 자식이 존재할 때
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallerChild = left;

      if (right < length && this.heap[right] < this.heap[left]) {
        smallerChild = right; // 더 작은 쪽 선택
      }

      if (this.heap[index] <= this.heap[smallerChild]) break; // 부모가 더 작으면 멈춤

      [this.heap[index], this.heap[smallerChild]] = [
        this.heap[smallerChild],
        this.heap[index],
      ]; // swap
      index = smallerChild;
    }
  }
}

const heap = new MinHeap();

const result = [];

for (const num of input) {
  if (num === 0) {
    result.push(heap.extractMin());
  } else {
    heap.insert(num);
  }
}
console.log(result);
