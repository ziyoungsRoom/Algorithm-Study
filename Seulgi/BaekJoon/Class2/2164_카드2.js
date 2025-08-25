// 언어 : Javascript , (성공/실패) : 1/2 , 메모리 : 28776 KB , 시간 : 176 ms
// 문제 : 
// 이제 다음과 같은 동작을 카드가 한 장 남을 때까지 반복하게 된다. 우선, 제일 위에 있는 카드를 바닥에 버린다. 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
// 예를 들어 N=4인 경우를 생각해 보자. 카드는 제일 위에서부터 1234 의 순서로 놓여있다. 1을 버리면 234가 남는다. 여기서 2를 제일 아래로 옮기면 342가 된다. 3을 버리면 42가 되고, 4를 바닥에 버리고 2를 제일 아래로 옮기면 2가 된다. 이제 더 이상 카드가 없으므로, 처음 카드만 남게 된다.
// N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.
const fs = require("fs");
const n = +fs.readFileSync(0).toString().trim();

let q = new Array(n);
for (let i = 0; i < n; i++) q[i] = i + 1;

let head = 0;
let tail = n;

while (tail - head > 1) {
    head++;
    
    q[tail] = q[head];
    tail++;
    head++;
}

console.log(q[head]);