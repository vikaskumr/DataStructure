/* You are given an array of integers where each integer represents a jump of its value in the array.
For instance the integer 2 represents a jump of two indices forward in the array the integer -3 represents 
a jump of three indices backward in the array
if a jump spills past the array bounds, it wraps over the other side. For instance a jump of -1 
at index 0 brings us to the last index of the array. Similarly a jump of 1 at the last index in the array 
brings us to index 0.

Write a function that respresents a boolena represnting whether the jumps in the array forms a single cycle.*

/

/* there is a simple trick to solve this question 
suppose we have travelled all the elements of the array and came back to the point where we have started then it is a cycle
but in case where it has came to the starting index before visiting all the elements then it is a multiple cycle 
for eg - [1, -1 , 1, -1] this array has multiple cycles
for eg - [2, 3, 1, -4, -4, 2] this array has a single cycle.
for eg - [2, 3, 1, -4, 1, 2] this has an infinite cycle.
 
and there might be case where it never comes to the point where we have started then it is an infinite cycle*/


function hasSingleCycle(array) {
  // Write your code here.
	
	let numElementVisited = 0;
	let currentIdx = 0;
	
	while(numElementVisited < array.length) {
    // condition to check if all the elements are not visited but the currentIdx is 0 so it means it has multiple cycles
		if(numElementVisited > 0 && currentIdx === 0 ) return false;
		numElementVisited++;
		currentIdx = getNextIdx(currentIdx, array);
	}
	
	return currentIdx === 0; // checkind at the end that currentIdx is 0 or not if 0 then we have reached the starting point where we have started and it array has a cycle
}

//function to get next index
function getNextIdx(currentIdx, array) {
	const jump = array[currentIdx];	
	const nextIdx = (currentIdx + jump) % array.length; // for 
	return nextIdx >=0 ? nextIdx : nextIdx + array.length;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
