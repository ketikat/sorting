describe('Bubble Sort', function(){
	beforeEach(function(){
	    var ogArray = [15, 25, 5, 17, 21],
	   		arr = [15, 25, 5, 17, 21],
	   		sorted = [5,15, 17, 21, 25];
    });
	var ogArray = [15, 25, 5, 17, 21],
	   	arr = [15, 25, 5, 17, 21],
	   	sorted = [5,15, 17, 21, 25];

  	it('handles an empty array', function(){
    	expect( bubbleSort([]) ).toEqual( [] );
  	});
 	

	it( 'Mutates the original array, if it is NOT sorted already', function() {
		expect(bubbleSort(arr)).toEqual(sorted);
		expect(bubbleSort(arr)).not.toEqual(ogArray);
		expect(bubbleSort(sorted)).toEqual(sorted);
		// expects it to not make moves

	});

	it('Contains the same elements as the original', function() {
    	expect(bubbleSort(ogArray).length).toBe(5);
    	expect(bubbleSort(arr)).toEqual(ogArray);
  	});

	it ('returns a sorted array', function(){
		expect(bubbleSort([5,3,2,1])).toEqual([1,2,3,5]);
		expect(bubbleSort([1,5,4,7,3,4])).toEqual([1,3,4,4,5,7]);
		expect(bubbleSort([1])).toEqual([1]);
	});

	it ('returns an array', function (){
		expect(Array.isArray(bubbleSort([5,3,2,1]))).toBe(true);
	});


});
