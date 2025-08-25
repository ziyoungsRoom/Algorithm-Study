// 언어 : Javascript , (성공/실패) : 1/14 , 메모리 : 42588 KB , 시간 : 304 ms

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const A_list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); // 정렬 필수
const compare_list = input[3].trim().split(" ").map(Number);

// Array.includes() : 시간복잡도 O(N)
// 바이너리 서치 : 시간복잡도 O(log N) / 정렬된 배열에서 정상 동작
const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    // 중간 인덱스 (= 중간값)
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};

let result = [];
for (const compare_num of compare_list) {
  result.push(binarySearch(A_list, compare_num) ? 1 : 0);
}

console.log(result.join("\n"));
