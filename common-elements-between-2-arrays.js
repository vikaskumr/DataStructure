/* O(n) complexity and O(n) space complexity */

let arr1 = [100, 10, 200, 1000, 1];
let arr2 = [1, 1000000, 10, 20];


let obj = {};
let result = [];

for (let i = 0; i < arr1.length; i++) {

  obj[arr1[i]] = true;
}


for (let i = 0; i < arr2.length; i++) {

  if (obj[arr2[i]]) {
    result.push(arr2[i]);
  }
}
console.log(result);
