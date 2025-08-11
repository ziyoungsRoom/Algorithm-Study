// 문제 : 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for(let i = 1; i <= T; i++){
    const [R, S] = input[i].split(' ');
    let result = '';
    
    for(let j = 0; j < S.length; j++){
        for(let k = 0; k < Number(R); k++){
            result += S[j];
        }
    }
    
    console.log(result);
}