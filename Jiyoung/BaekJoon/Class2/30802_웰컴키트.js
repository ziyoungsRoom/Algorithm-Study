// 언어 : Javascript , (성공/실패) : 1/1 , 메모리 : 9588 KB , 시간 : 92 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const Tshirt_order = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);

let Tshirt_count = 0;

// 사실 반환 배열이 필요하지 않아서 map 보단 forEach 를 사용하는 편이 나았을 것 같아요.
// 티셔츠가 부족하면 안되니 올림 메서드 사용! : Math.ceil()
Tshirt_order.map((size_order) => (Tshirt_count += Math.ceil(size_order / T)));

console.log(Tshirt_count);
console.log(`${Math.floor(N / P)} ${N % P}`);
