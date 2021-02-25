/*  let scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]

consider this as an array of scores given to students and then calculate that the min

rewards given that can be given to students based on thier scores

Assumptions

Consider every student has got unique score and all students must recieve atleast 1 reward

O(n) time complexity and O(n) space complexity solution

Basic idea here is to run 2 for loops seperately 

1st for loop (run from left to right) 
check what are the increasing numbers then previous one then assign the  max of (current reward, previous reward + 1)

2nd for loop (run from right to left) check what are the increasing numbers and then assign the max of (current reward, previous reward + 1)
*/


let scores = [8, 4, 2, 1, 3, 6, 7, 9, 5];
let output = [4, 3, 2, 1, 2, 3, 4, 5, 1];

let rewards = scores.map(score => 1);


for (let i = 1; i < scores.length; i++) {

  if (scores[i] < scores[i - 1]) {
    rewards[i] = Math.max(rewards[i], rewards[i - 1] + 1);
  }
}

for (let i = scores.length - 2; i >= 0; i--) {

  if (scores[i] > scores[i + 1]) {
    rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
  }
}

console.log(rewards);




