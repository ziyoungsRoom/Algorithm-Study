// 언어 : Javascript , (성공/실패) : 2/9 , 메모리 : 19852 KB , 시간 : 5524 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 중복 제거 로직 : 값이 같은 요소의 인덱스가 현재 인덱스와 같을 경우에만 필터링
const unique_list = input.filter((word, idx) => input.indexOf(word) === idx);

// 문자열의 값이 숫자인지 여부 판별 : isNaN()
// 입력값이 전부 string이라 불필요한데 제가 착각하고 넣었습니다.
const str_list = unique_list.filter((word) => isNaN(word));

const dic_sorted_str = str_list.sort();
const length_sorted_str = dic_sorted_str.sort((a, b) => a.length - b.length);

length_sorted_str.forEach((str) => console.log(str));
