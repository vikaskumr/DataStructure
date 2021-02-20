function riverSizes(matrix) {
  // Write your code here.
	const sizes = [];
	const visited = matrix.map(row => row.map(value => false))
	
	for(let i = 0; i < matrix.length; i++) {
		for (let j = 0; j <matrix[i].length; j++) {
			if(visited[i][j]) continue;
			traverseNode(i,j,matrix,visited,sizes);
		}
	}
	
	return sizes;
	
}

function traverseNode(i, j, matrix, visited, sizes) {
	let currentRiverSize = 0;
	const nodesToExplore = [[i, j]];
	
	 // console.log('nodesToExplore', nodesToExplore);
	
	while(nodesToExplore.length) {
		
		const currentNode = nodesToExplore.pop();
		// console.log('currentNode', currentNode);
		// console.log('nodesToExplore', nodesToExplore);
		i = currentNode[0];
		j = currentNode[1];
		
		if(visited[i][j]) continue;
		
		visited[i][j] = true;
		
		if(matrix[i][j] === 0) continue;
		currentRiverSize++;
		
		
		const unvisitedNeighbors = getUnvistedNeighbors(i, j , matrix, visited);
		
		 // console.log('unvisitedNeighbors', unvisitedNeighbors);
		
		for(const neighbor of unvisitedNeighbors) {
			nodesToExplore.push(neighbor);
		}
		
		 // console.log('nodesToExplore', nodesToExplore);
	}
	
	if(currentRiverSize > 0 ) {
		 // console.log('sizes', currentRiverSize);
		sizes.push(currentRiverSize);
	}
	
	
}

function getUnvistedNeighbors(i, j , matrix, visited) {
	
	const unvisitedNeighbors = [];
	
	// console.log('i', i);
	// console.log('j', j);
	
	
	if(i > 0 && !visited[i-1][j]) {
		unvisitedNeighbors.push([i-1, j]);		
	}
	
	
	if(i < matrix.length - 1 && !visited[i + 1][j]) {
		unvisitedNeighbors.push([i+1, j]);
	} 
	
	if(j  > 0 && !visited[i][j-1] ) {
		unvisitedNeighbors.push([i, j -1]);
		
	} 
	
	if(j <  matrix[0].length - 1 && !visited[i][j + 1]) {
		unvisitedNeighbors.push([i, j + 1]);
	} 
	
	return unvisitedNeighbors;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
