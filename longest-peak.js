function longestPeak(array) {
  // Write your code here.
	
	let longestPeakLength = 0;
	let i = 1;
	
	while(i < array.length -1 ) {
		//finding a peak
		const isPeak =  array[i] >  array[i-1]  && array[i] > array[i+1];
		
		if(!isPeak) {
			i++;
			continue;
			
		}
		
		let leftIdx = i - 2;
		//comparing the left idx of the peak and checking if the 
		//elemnts are part of the peak or not..
		while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
			leftIdx--;
		}
		let rightIdx = i + 2;
		
		//comparing the right idx of the peak and checking if the 
		//elements are part of the peak or not..
		while(rightIdx < array.length && array[rightIdx] < array[rightIdx -1]) {
			rightIdx++;
		}
		
		const currentPeakLength = rightIdx - leftIdx - 1;
		
		longestPeakLength = Math.max(longestPeakLength,currentPeakLength);
		i = rightIdx;
	}
	return longestPeakLength;
	
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
