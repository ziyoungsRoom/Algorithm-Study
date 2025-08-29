// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9724 KB , 시간 : 88 ms
// 문제 : 요세푸스 문제는 다음과 같다.
// 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.
// N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.
const fs = require("fs");
const [N, K] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let q = [];
for (let i = 1; i <= N; i++) q.push(i); // 1부터 N까지 사람들 번호

let result = [];
let idx = 0;

while (q.length > 0) {
  idx = (idx + K - 1) % q.length; // K번째 사람으로 이동
  result.push(q.splice(idx, 1)[0]); // 제거한 사람 저장
}

console.log(`<${result.join(", ")}>`); // 요구 출력 형식
