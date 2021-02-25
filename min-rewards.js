/*  let scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]

consider this as an array of scores given to students and then calculate that the min

rewards given that can be given to students based on thier scores

Assumptions

Consider every student has got unique score and all students must recieve atleast 1 reward

O(n^2) time complexity and O(n) space complexity solution
*/


let scores = [8, 4, 2, 1, 3, 6, 7, 9, 5];

//output =   [4, 3, 2, 1, 2, 3, 4, 5, 1]

let rewards = scores.map(score => 1);

for (let i = 1; i < scores.length; i++) {

  let j = i - 1;

  if (scores[i] > scores[j]) {
    rewards[i] = rewards[j] + 1;
  } else {
    while (j >= 0 && scores[j] > scores[j + 1]) {
      rewards[j] = Math.max(rewards[j], rewards[j + 1]);
      j--;
    }
  }
}

console.log(rewards);





