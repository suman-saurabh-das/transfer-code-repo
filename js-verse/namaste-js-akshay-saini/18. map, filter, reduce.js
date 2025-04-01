// ---------- Map method ----------
const arr = [5, 2, 1, 4, 3];
// double
function double(val) {
    return 2 * val;
}
// number to binary
function numberToBinary(val) {
    return val.toString(2);
}
const doubleArr = arr.map(double);
console.log(doubleArr);
const binaryArr = arr.map(numberToBinary);
console.log(binaryArr);

// ---------- Filter method ----------
const arr2 = [5, 2, 1, 4, 3];
// isOdd
function isOdd(val) {
    return val % 2 === 1
}
// isEven
function isEven(val) {
    return val % 2 === 0
}
const oddArr = arr2.filter(isOdd);
console.log(oddArr);
const evenArr = arr2.filter(isEven);
console.log(evenArr);

// Using arrow function to filter odd values
const oArr = arr2.filter((x) => x % 2 === 1);
console.log(oArr);

// Using arrow function to filter even values
const eArr = arr2.filter((x) => x % 2 === 0);
console.log(eArr);

const arr3 = [6,3,2,7,1,8,5,4,9];

// ---------- normal sum function ----------
function findSum (arr3) {
    let sum = 0;
    for(let i=0; i<arr3.length; i++){
        sum = sum + arr3[i];
    }
    return sum;
}
console.log(findSum(arr3));

// normal find max number function
function findMax (arr3) {
    let max = Number.MIN_VALUE;
    for(let i=0; i<arr3.length; i++){
        if(arr3[i] > max){
            max = arr3[i];
        }
    }
    return max
}
console.log(findMax(arr3));

// ---------- Reduce method ----------

// Syntax
arrayName.reduce(function (accumulatorVal, currentValArray){
    // Logic
    // accumulatorVal is the final value that will be returned
    // currentValArray is the current value of the array while iterating the array
}, initialAccumulatorVal)

// sum using reduce
const sumOfArr3 = arr3.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0)
console.log(sumOfArr3);

// max using reduce
const maxOfArr3 = arr3.reduce(function (acc, curr){
    if(curr > acc){
        acc = curr
    }
    return acc;
}, Number.MIN_VALUE)
console.log(maxOfArr3);

// Examples
const users = [
    {firstName: "Albert", lastName: "Drake", age: 18},
    {firstName: "Dane", lastName: "Conman", age: 22},
    {firstName: "Ronald", lastName: "Hill", age: 32},
    {firstName: "David", lastName: "Cooper", age: 18}
]

// Map function to get full name
const usersFullName = users.map((user) => user.firstName + " " + user.lastName);
console.log(usersFullName);

// Reduce function to get count of users with same age
const ageMap = users.reduce(function (acc, curr) {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.log(ageMap);

// Chaining filter and map to get first name of users whose age is < 20
const minor = users.filter((val) => val.age < 20).map((val) => val.firstName);
console.log(minor);

// Using reduce
const minor2 = users.reduce(function (acc, curr) {
    if(curr.age < 20){
        acc.push(curr.firstName);
    }
    return acc;
}, [])
console.log(minor2);