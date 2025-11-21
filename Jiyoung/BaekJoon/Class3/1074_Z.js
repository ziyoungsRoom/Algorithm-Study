// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 9616 KB , 시간 : 96 ms
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');
const [N, r, c] = input.split(' ').map(Number);

let offset = 0;

const devide = (size, row, col) => {
  if (size === 1) return offset;
  console.log(size, offset);

  const mid = size / 2;

  if (row < mid && col < mid) {
    return devide(mid, row, col);
  } else if (row < mid && col >= mid) {
    offset += mid * mid * 1;
    return devide(mid, row, col - mid);
  } else if (row >= mid && col < mid) {
    offset += mid * mid * 2;
    return devide(mid, row - mid, col);
  } else {
    offset += mid * mid * 3;
    return devide(mid, row - mid, col - mid);
  }
};

console.log(devide(2 ** N, r, c));
