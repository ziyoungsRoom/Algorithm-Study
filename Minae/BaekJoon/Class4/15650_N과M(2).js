// 언어: JavaScript, (성공/실패): (1/2), 메모리: 9,444 KB, 시간: 96 ms
const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ');
const [N, M] = input.map(Number);

// 현재까지 선택한 숫자들을 저장할 배열
const result = [];

// 백트래킹 함수
// start: 다음에 선택할 수 있는 시작 숫자(중복 방지 + 오름차순 유지)
const backtrack = (start) => {
  // 종료 조건: M개를 다 선택했으면 출력하고 종료
  if (result.length === M) {
    console.log(result.join(' '));
    return; // 여기서 함수는 끝나지만, 이 함수를 부른 곳의 for문은 계속됨!!!
  }

  // 현재 단계에서 start부터 N까지 숫자를 하니씩 시도
  for (let i = start; i <= N; i++) {
    // (1) 숫자 하나 선택
    result.push(i);
    // (2) 다음 단계 재귀 호출
    //     i보다 큰 숫자만 선택할 수 있게 start를 i+1로 넘김
    backtrack(i + 1);
    // (3) 재귀가 끝나고 돌아오면, 선택했던 숫자를 제거해 원상 복구
    //     그리고 for문의 '다음 i'를 시도함
    result.pop();
  }
};

// 1부터 시작해서 백트리킹 실행
backtrack(1);
