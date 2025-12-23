// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9348 KB , 시간 : 92 ms

// 문제: 이진 트리를 전위/중위/후위 순회한 결과 출력
// 핵심: 재귀로 방문 순서만 바꾸면 됨 (루트-왼-오 / 왼-루트-오 / 왼-오-루트)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const tree = {};

// 트리 구조를 객체로 저장
for (let i = 1; i <= N; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = { left, right };
}

let result = "";

// 전위 순회: 루트 → 왼쪽 → 오른쪽
function preorder(node) {
  if (node === ".") return; // 자식 없으면 종료
  result += node; // 1. 현재 노드 방문
  preorder(tree[node].left); // 2. 왼쪽 서브트리
  preorder(tree[node].right); // 3. 오른쪽 서브트리
}

// 중위 순회: 왼쪽 → 루트 → 오른쪽
function inorder(node) {
  if (node === ".") return;
  inorder(tree[node].left); // 1. 왼쪽 서브트리
  result += node; // 2. 현재 노드 방문
  inorder(tree[node].right); // 3. 오른쪽 서브트리
}

// 후위 순회: 왼쪽 → 오른쪽 → 루트
function postorder(node) {
  if (node === ".") return;
  postorder(tree[node].left); // 1. 왼쪽 서브트리
  postorder(tree[node].right); // 2. 오른쪽 서브트리
  result += node; // 3. 현재 노드 방문
}

// 각 순회 방식으로 출력
preorder("A");
console.log(result);
result = "";

inorder("A");
console.log(result);
result = "";

postorder("A");
console.log(result);
