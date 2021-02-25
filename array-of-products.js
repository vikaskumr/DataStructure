function arrayOfProducts(array) {
  // Write your code here.
	
	const products = new Array(array.length).fill(1);
	
	let leftRunningProduct = 1;
	
	for(let i = 0; i < array.length; i++) {
		products[i] = leftRunningProduct;
		
		
		leftRunningProduct *= array[i];
		console.log('array[i]', array[i]);
		console.log('products[i]',products[i]);
		console.log('leftRunningProduct', leftRunningProduct);
	}
	
	// console.log('products', products);
	
	let rightRunningProduct = 1;
	
	for(let i = array.length - 1; i > -1; i--) {
		products[i] *= rightRunningProduct;
		rightRunningProduct *= array[i];
	}
// 	console.log('products', products);
	
// 	console.log('rightRunningProduct', rightRunningProduct);
	
	return products;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
