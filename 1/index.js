import fs from 'fs';
function solution1() {
  const calibrationLines = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
  const values = calibrationLines.map((line) => {
    let x = line.split('').find((v) => !Number.isNaN(Number(v)));
    let y = line.split('').findLast((v) => !Number.isNaN(Number(v)));
    return Number(x + y);
  });
  return values.reduce((a, b) => a + b);
}

function parseLine(line) {
  line.find(())
}


function solution2() {

  const calibrationLines = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');
  const values = calibrationLines.map((line) => {
    let x = line.split('').find((i) => !Number.isNaN(Number(i)));
    let y = line.split('').findLast((i) => !Number.isNaN(Number(i)));
    return Number(x + y);
  });
  return values.reduce((a, b) => a + b);
}

console.log(solution1());
console.log(solution2());
