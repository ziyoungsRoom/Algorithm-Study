// 언어 : Javascript , (성공/실패) : 1/0 , 메모리 : 9424 KB , 시간 : 92 ms

// 문제 : 과거 이집트인들은 각 변들의 길이가 3, 4, 5인 삼각형이 직각 삼각형인것을 알아냈다. 주어진 세변의 길이로 삼각형이 직각인지 아닌지 구분하시오.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let line of input){
    const [a, b, c] = line.split(' ').map(Number);
    if(a === 0 && b === 0 && c === 0) break;
    
    const maxSide = Math.max(a, b, c);
    const sides = [a, b, c].filter(side => side !== maxSide);
    
    if(sides[0]**2 + sides[1]**2 === maxSide**2){
        console.log("right");
    } else {
        console.log("wrong");
    }
}