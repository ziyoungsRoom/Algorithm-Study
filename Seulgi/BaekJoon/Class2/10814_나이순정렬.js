// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 48260 KB , 시간 : 360 ms

// 문제 : 온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const n = Number(input[0]);
const members = input.slice(1).map(line => {
    const [age, name] = line.split(" ");
    return [Number(age), name];
});

members.sort((a, b) => a[0] - b[0]);

console.log(members.map(m => m.join(" ")).join("\n"));