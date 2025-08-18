// 언어 : Javascript , (성공/실패) : 1/4 , 메모리 : 9436 KB , 시간 : 92 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 팰린드롬수인지 판별하는 함수
const isPalindrome = (num) => {
  const num_arr = num.split("");

  // Math.floor 을 사용한 이유
  // : 숫자의 길이가 홀수일 경우, 값이 x.5이기 때문에 몫에 해당하는 x 인덱스를 제외하고 비교하도록 작성했습니다.
  const middle_idx = Math.floor(num_arr.length / 2);
  for (let i = 0; i < middle_idx; i++) {
    if (num_arr[i] !== num_arr[num_arr.length - 1 - i]) {
      return "no";
    }
  }

  return "yes";
};

// 입력값으로 받은 수를 차례로 인수에 넣어 함수 실행하여 결과 출력.
for (let i = 0; i < input.length; i++) {
  if (Number(input[i]) === 0) break;
  else {
    const result = isPalindrome(input[i]);
    console.log(result);
  }
}
