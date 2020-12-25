/* shifting all negative numbers to left and positive number to right
in O(n) complexity and O(1) complexity */

let arr = [1, 2, 3, -4, -5, -6];

let left = 0;
let right = arr.length - 1;

while (left < right) {
  if (arr[left] > 0) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
  left++;
  right--;
}

console.log(arr);
