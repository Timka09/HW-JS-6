// Task 1
let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}
// Task 2
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}
// Task 3
const number = 7;
for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}
// Task 4
let miss = [1, 2, 3, 4, 5];
let i = 0;
while (i < miss.length) {
  console.log(miss[i]);
  i++;
}
// Task 5
let mess = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < mess.length; i++) {
  if (i === 7) {
    break;
  }
  console.log(mess[i]);
}
// Task 6
let n = 20;
for (let i = 0; i < 30; i++) {
  if (i === n) {
    break;
  }
  console.log(i);
}
// Task 7
let y = 1;
while (y <= 20) {
  if (y % 3 === 0) {
    y++;
    continue;
  }
  console.log(y);
  y++;
}

