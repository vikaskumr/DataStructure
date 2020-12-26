

/* spiral matrix question 

Approach set a startRow pointer, endRow pointer, startCol pointer , endCol pointer

then accordingly first iterate the first row , then last column , then reverse iterate the last row,
and then first col , repeat this until (startRow <= endRow && startCol <= endCol)

*/

let arr = [

  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];


let output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];




let startRow = 0, endRow = arr.length - 1;

let startCol = 0, endCol = arr[0].length - 1;

let result = [];


while (startRow <= endRow && startCol <= endCol) {


  for (let col = startCol; col <= endCol; col++) {

    result.push(arr[startRow][col]);
  }

  for (let row = startRow + 1; row <= endRow; row++) {

    result.push(arr[row][endCol]);

  }

  for (col = endCol - 1; col >= startCol; col--) {

    result.push(arr[endRow][col]);
  }


  for (row = endRow - 1; row > startRow; row--) {

    result.push(arr[row][startCol]);
  }


  startRow++;
  endRow--;
  startCol++;
  endCol--;


}

console.log(result);
