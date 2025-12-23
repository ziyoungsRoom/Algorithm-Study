// 언어: JavaScript, (성공/실패): (1/0), 메모리: 9,372 KB, 시간: 88 ms
const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

// 노드의 개수
const nodeCount = parseInt(input[0]);
// 트리를 저장할 객체
// key: 부모 노드
// value: [왼쪽 자식, 오른쪽 자식]
const tree = {};
// 트리 정보 저장
for (let i = 1; i <= nodeCount; i++) {
  const [parent, left, right] = input[i].split(' ');
  tree[parent] = [left, right];
}

// 순회 결과를 저장할 문자열
let preorder = ''; // 전위 순회
let inorder = ''; // 중위 순회
let postorder = ''; // 후위 순회

// 트리를 순회하는 재귀 함수
function traverse(node) {
  // 자식이 없는 경우(.) 더 이상 내려가지 않음
  if (node === '.') return;

  // 현재 노드의 왼쪽 / 오른쪽 자식
  const [left, right] = tree[node];
  // 전위 순회: 현재 노드를 가장 먼저 방문
  preorder += node;
  // 왼쪽 서브트리 순회
  traverse(left);
  // 중위 순회: 왼쪽을 다 방문한 후 현재 노드 방문
  inorder += node;
  // 오른쪽 서브트리 순회
  traverse(right);
  // 후위 순회: 왼쪽 + 오른쪽을 모두 방문한 후 현재 노드 방문
  postorder += node;
}

// 항상 A가 루트 노드
traverse('A');

console.log(preorder);
console.log(inorder);
console.log(postorder);
