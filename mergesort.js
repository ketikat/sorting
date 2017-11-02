function mergeSort(arr){

	if(arr.length === 1){
		return arr
	}

	else {
		var first = split(arr)[0]
		var second = split(arr)[1]

		if (first < second) {
			mergeSort(split(arr));
		}
		else{
			mergeSort(split.([second, first])
		}

	}


}


function split(wholeArray) {
	var firstHalf = wholeArray.slice(0, (wholeArray.length/2))
	var secondHalf = wholeArray.slice((wholeArray.length/2))
  	return [firstHalf, secondHalf];
}


console.log(split([15, 25, 5, 17]))