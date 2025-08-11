// 언어 : Javascript , (성공/실패) : 1/10 , 메모리 : 9376 KB , 시간 : 92 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_count = Number(input[0]);

// 테스트 케이스 개수 만큼 출력
for (let i = 1; i <= input_count; i++) {
  let [num, str] = input[i].split(" ");
  let answer = "";

  // 문자열 반복 메서드 : str.repeat(num)
  str.split("").map((s) => (answer += s.repeat(Number(num))));

  console.log(answer);
}
