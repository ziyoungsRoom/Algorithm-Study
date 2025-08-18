// 언어 : Javascript , (성공/실패) : 1/5 , 메모리 : 9592 KB , 시간 : 100 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const greatest_common_divisor = (num1, num2) => {
  const min_num = Math.min(num1, num2);
  // 최대공약수 : 둘중 작은 수부터 1까지 역순으로 돌면서 큰수를 나눴을 때 나머지가 0이 되는 수
  for (let i = min_num; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) return i;
  }
};

const least_common_multiple = (num1, num2) => {
  const min_num = Math.min(num1, num2);
  const max_num = Math.max(num1, num2);

  let i = 1;

  // 최소공배수 : 둘 중 큰 수의 배수가 작은 수로 나눴을 때 나머지가 0이 되는 수
  while (true) {
    if ((max_num * i) % min_num === 0) {
      return max_num * i;
      break;
    }
    i++;
  }
};

console.log(greatest_common_divisor(input[0], input[1]));
console.log(least_common_multiple(input[0], input[1]));
