// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9644 KB , 시간 : 148 ms
const input = requrie("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

let closer = 0;

for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      const sum = cards[i] + cards[j] + cards[k];

      if (sum <= M && sum > closer) {
        closer = sum;
      }
    }
  }
}

console.log(closer);
