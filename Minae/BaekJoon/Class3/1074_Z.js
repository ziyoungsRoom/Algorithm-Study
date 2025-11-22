// 언어: JavaScript, (성공/실패): 1/1, 메모리: 9,600 KB, 시간: 96 ms
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const [N, r, c] = input.split(' ').map(Number);

function solution(n, r, c) {
  // 크기가 1(2^0)일때 시작 인덱스는 0이므로 방문 순서도 0
  if (n === 0) return 0;

  // 현재 영역의 한 변의 길이의 절반(2^(n-1))
  const half = Math.pow(2, n - 1);
  // 한 사분면(half x half) 영역의 칸 수
  const area = half * half;

  if (r < half && c < half) {
    // 1사분면(왼쪽 위)
    return solution(n - 1, r, c);
  } else if (r < half && c >= half) {
    // 2사분면(오른쪽 위)
    return area + solution(n - 1, r, c - half);
    // 이미 지나간 1사분면(area) 만큼 더함, 열 인덱스 보정 후 재귀
  } else if (r >= half && c < half) {
    // 3사분면(왼쪽 아래)
    return 2 * area + solution(n - 1, r - half, c);
    // 이미 지나간 2사분면(area) 만큼 더함, 행 인덱스 보정 후 재귀
  } else {
    // 4사분면(오른쪽 아래)
    return 3 * area + solution(n - 1, r - half, c - half);
    // 이미 지나간 3사분면(area) 만큼 더함, 양쪽 인덱스 보정 후 재귀
  }
}

console.log(solution(N, r, c));
