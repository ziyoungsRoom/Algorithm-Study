// 언어 : Javascript , (성공/실패) : 1/6 , 메모리 : 9508 KB , 시간 : 100 ms

const input = require("fs").readFileSync("/dev/stdin").toString();

const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  let tree = "";

  // 줄만큼 * 반복 출력
  tree += "*".repeat(i);
  console.log(tree);
}
