function mergeSort(arr){
	if (!arr || arr.length < 2) return arr

	else {
		let splitArr = split(arr)
		let arrL = splitArr[0]
		let arrR = splitArr[1]
		return merge(mergeSort(arrL), mergeSort(arrR));
	}

}


function split(wholeArray) {
	const firstHalf = wholeArray.slice(0, (wholeArray.length/2))
	const secondHalf = wholeArray.slice((wholeArray.length/2))
  	return [firstHalf, secondHalf];
}



function merge(arrayL, arrayR) {
	let sortedArr= [];
	let	idxR = 0;
	let idxL = 0;

while((idxL+ idxR) < (arrayL.length + arrayR.length) ){

	if (!arrayL[idxL]) {
		return sortedArr.concat(arrayR.slice(idxR))
	}
	if (!arrayR[idxR]) {
		return sortedArr.concat(arrayL.slice(idxL))
	} 

	if (arrayL[idxL] > arrayR[idxR]) {
		sortedArr.push(arrayR[idxR])
		idxR++
	} else {
		sortedArr.push(arrayL[idxL])
		idxL++
	}
}
	return sortedArr
}


// console.log(merge([5,8,10,12], [6,7,9,11,15,16]))

// console.log(split([15, 25, 5, 17]))