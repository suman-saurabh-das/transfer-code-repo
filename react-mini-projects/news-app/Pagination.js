let dataArr = [];
for (let i = 0; i < 50; i++) {
  dataArr.push(i.toString());
}

let head = 0;

const getCurrentIndexData = (dataArr, head) => {
  let currentArr = [];
  let i;
  if (head > 50) {
     i = head - 10;
  } else {
    i = head
  }
  for(; i < head + 10; i++) {
    currentArr.push(dataArr[i]);
  }
  return currentArr;
}

console.log(getCurrentIndexData(dataArr, 0));
console.log(getCurrentIndexData(dataArr, 10));

const leftClick = (head) => {
  if (head > 0) {
    return head - 10;
  }
  return head;
}

const rightClick = (head) => {
  if (head < 50) {
    return head + 10
  } else {
    return head;
  }
}

console.log(leftClick(20));
console.log(leftClick(10));
console.log(leftClick(0));

console.log(rightClick(10));
console.log(rightClick(20));
console.log(rightClick(30));

console.log(rightClick(50));
console.log(getCurrentIndexData(dataArr, 50));
