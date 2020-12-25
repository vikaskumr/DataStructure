/* an efficient solution having O(n) solution in javascript

let arr = [11, 2, 7, 15];
let target = 9;

run a for loop and for every element calculate the difference between target and element

if(you find that difference in obj then console.log(obj[diff], i));
else
make an object to store the value */

let arr = [11, 15, 2, 7, 11];

let target = 9;
let obj = {};

for (let i = 0; i < arr.length; i++) {

  let diff = target - arr[i];

  if (obj[diff] !== undefined) {
    console.log([obj[diff], i]);
  } else {

    obj[arr[i]] = i;
    console.log(obj);
  }

}
