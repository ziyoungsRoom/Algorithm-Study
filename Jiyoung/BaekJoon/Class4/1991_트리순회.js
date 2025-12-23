// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9344 KB , 시간 : 92 ms
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = +input[0];
const tree = input.slice(1).map((line) => line.split(' '));

const left = new Map();
const right = new Map();

const firstNode = tree[0][0];

for (let i = 0; i < N; i++) {
  left.set(tree[i][0], tree[i][1]);
  right.set(tree[i][0], tree[i][2]);
}

let preorder = '';
let inorder = '';
let postorder = '';

const visitTree = (node) => {
  if (node === '.' || !node) return;

  // preorder: 전위 순회 노드 방문
  preorder += node;

  visitTree(left.get(node));

  // inorder: 중위 순회 노드 방문
  inorder += node;

  visitTree(right.get(node));

  // postorder: 후위 순회 노드 방문
  postorder += node;
};

visitTree(firstNode);

console.log(preorder, inorder, postorder);
