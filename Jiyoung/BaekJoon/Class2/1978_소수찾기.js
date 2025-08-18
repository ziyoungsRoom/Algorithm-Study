// 언어 : Javascript , (성공/실패) : 1/8 , 메모리 : 9740 KB , 시간 : 152 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num_list = input[1].split(" ").map(Number);

// 숫자 리스트에서 1보다 크고, 1과 자기자신만을 약수로 하는 수를 필터링하여 소수만 남긴 배열
const prime_num_list = num_list.filter((num) => {
  if (num > 1) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
    }
    return count === 2;
  }
});

console.log(prime_num_list.length);
