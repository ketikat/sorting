function bubbleSort(array) {
	//take the current elemtn
	//compare it to the next
	//
	var marker = array.length; //where are we in the array
	//var mod = array.length;// so if we have an array of 8, and we've done one iteration, 
									//now we want to sort up to 7 times
									//we shouuld stop at 7, since arr[7] is already sorted
	while(marker>0){
		for(var i = 0; i<marker; i++){
			if(array[i]>array[i+1]){
				var swapI = array[i];
				var swapI1 = array[i+1];
				array[i] = swapI1;
				array[i+1] = swapI;
			}
		}
		marker--;
	}
	 return array;
}