// 언어 : Javascript , (성공/실패) : 1/3 , 메모리 : 9588 KB , 시간 : 88 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
const numbers = input.map(Number);

const fibonacci_count = (num) => {
  let count_zero,
    count_one,
    sum = 0;

  if (num === 0) {
    count_zero = 1;
    count_one = 0;

    return `${count_zero} ${count_one}`;
  } else {
    count_zero = 0;
    count_one = 1;

    for (let i = 0; i < num - 1; i++) {
      sum = count_zero + count_one;

      // count_zero : n의 0 출력 횟수는 n-1의 1 출력 횟수와 동일.
      // count_one : n의 1 출력 횟수는 n-1의 0 출력 횟수와 1 출력 횟수 합과 동일.
      count_zero = count_one;
      count_one = sum;
    }
  }

  return `${count_zero} ${count_one}`;
};

const result = numbers.map((num) => {
  return fibonacci_count(num);
});

console.log(result.join("\n"));
