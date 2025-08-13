// 문제 : 티셔츠: S, M, L, XL, XXL, XXXL 총 6가지 사이즈
// 같은 사이즈끼리 T장 단위 묶음으로만 주문 가능
// 각 사이즈별로 신청한 인원 수가 주어짐 → 정확히 나눠줄 수 있도록 최소 몇 묶음을 주문해야 하는지 구해야 함
// 펜 : 한 종류
//  P자루 단위 묶음 또는 한 자루씩 주문 가능
// 참가자 수에 맞게 정확히 준비해야 함 → 최대 몇 묶음을 주문할 수 있는지 구해야 함
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const N = data[idx++];               // 참가자 수
const counts = [];                    // S,M,L,XL,XXL,XXXL
for (let k = 0; k < 6; k++) counts.push(data[idx++]);
const T = data[idx++];                // 티셔츠 묶음 크기
const P = data[idx++];                // 펜 묶음 크기

let shirtBundles = 0;
for (let c of counts) {
  const q = Math.floor(c / T);        // 몫
  const r = c % T;                    // 나머지
  shirtBundles += q + (r > 0 ? 1 : 0);// 나머지 있으면 묶음 하나 더
}

const penPacks = Math.floor(N / P);   // 펜 묶음 개수
const penSingles = N - penPacks * P;  // 남는 펜 낱개

console.log(shirtBundles);
console.log(penPacks, penSingles);