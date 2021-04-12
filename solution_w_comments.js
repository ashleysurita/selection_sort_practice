function selectionSort(array) {
	// if array is blank or a length of 1, return array
	if ( array.length <= 1 ) return array
	
	// spread incase immutable
	let arr = [...array]
  // loop through the array, set minimum to the first number
	for ( i = 0; i < arr.length - 1; i++ ) {
		const currentValue = arr[i]
		let minIndex = i
	// for each number, look through the rest of the array and see if there is a lower number
		for( j = i + 1; j < arr.length; j++ ) {
		// if there is a lower number, set minimum number as lowest, continue looking until there is no lower number
			if ( arr[j] <= arr[minIndex] ) {
				minIndex = j
			}		
		}
	// finished looking through the array
	// swap current and minimum number if they are not equal
		arr[i] = arr[minIndex]
		arr[minIndex] = currentValue
	}
	return arr
}
