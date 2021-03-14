/*
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Input: nums = [1,2,2,4]
Output: [2,3]

Input: nums = [1,1]
Output: [1,2]
*/

/*
Solution

Take out all the unique numbers and put the number which is duplicate in output array 
and then take the sum of all unique elements and the sum of all the positions 
of the original array and subtract originalSum - sumofUniqueElements which will give
the missing number and push in output array.

*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
    let uniqueNumbers = {};
    let output = [];
    for(let i = 0; i < nums.length; i++) {
        uniqueNumbers[nums[i]] = uniqueNumbers[nums[i]] ? uniqueNumbers[nums[i]] + 1: 1;
    }
    
   
    for(let key in uniqueNumbers) {
        if(uniqueNumbers[key] > 1) {
            output.push(key); 
        } 
    }
    
  
    let sumofUniqueNumbers = Object.keys(uniqueNumbers).reduce((a,b)=> Number(a)+Number(b));
   
    let orginalSum = 0;
    
   
    for(let i = 1; i <= nums.length; i++) {
        orginalSum += i;
    }
    
   
    let missingNumber = orginalSum - sumofUniqueNumbers;
    output.push(missingNumber);
    

    return output;
    
};
