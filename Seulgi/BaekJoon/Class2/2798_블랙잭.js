// 문제 : 카드 개수 N(3 ≤ N ≤ 100)와 목표 값 M(10 ≤ M ≤ 300,000)이 주어진다.
// 각 카드에는 양의 정수가 적혀 있고, N장의 카드 중에서 3장만 선택할 수 있다.
// 선택한 3장의 합이 M을 넘지 않으면서 M에 가장 가까운 값을 찾아야 한다.
const fs = require("fs");
const nums = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const N = nums[0], M = nums[1];
const cards = nums.slice(2);

let best = 0;
for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
            const s = cards[i] + cards[j] + cards[k];
            if (s <= M && s > best) best = s;
        }
    }
}
console.log(best);