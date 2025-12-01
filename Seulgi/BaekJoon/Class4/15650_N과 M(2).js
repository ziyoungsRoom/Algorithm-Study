// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9452KB , 시간 : 96ms

// 문제 : 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
// 고른 수열은 오름차순이어야 한다.

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

const [N, M] = input.map(Number);

// 현재까지 선택한 숫자들을 저장할 배열
const result = [];

// 백트래킹 함수
// start: 다음에 선택할 수 있는 시작 숫자 (오름차순 유지)
const backtrack = (start) => {
  // 종료 조건: M개를 다 선택했으면 출력하고 종료
  if (result.length === M) {
    console.log(result.join(" "));
    return;
  }

  // start부터 N까지 숫자를 하나씩 시도
  for (let i = start; i <= N; i++) {
    // 숫자 선택
    result.push(i);
    // 다음 단계 재귀 호출 (i+1부터 시작하여 오름차순 유지)
    backtrack(i + 1);
    // 백트래킹: 선택했던 숫자를 제거하여 원상 복구
    result.pop();
  }
};

// 1부터 시작해서 백트래킹 실행
backtrack(1);
