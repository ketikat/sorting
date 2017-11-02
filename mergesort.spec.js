describe('Merge Sort', function(){
	
	var ogArray = [15, 25, 5, 17, 21],
	   	arr = [15, 25, 5, 17, 21],
	   	sorted = [5,15, 17, 21, 25];

  	it('handles an empty array', function(){
    	expect( mergeSort([]) ).toEqual( [] );
  	});

	it('Contains the same elements as the original', function() {
    	expect(mergeSort(ogArray).length).toBe(5);
    	expect(mergeSort(arr)).toEqual(ogArray);
  	});

	it ('returns a sorted array', function(){
		expect(mergeSort([5,3,2,1])).toEqual([1,2,3,5]);
		expect(mergeSort([1,5,4,7,3,4])).toEqual([1,3,4,4,5,7]);
		expect(mergeSort([1])).toEqual([1]);
		expect(mergeSort(ogArray)).toEqual(sorted);
	});

	it ('returns an array', function (){
		expect(Array.isArray(mergeSort([5,3,2,1]))).toBe(true);
	});

	// it('uses split', function(){
	// 	expect(split).toHaveBeenCalled();
	// });


});

describe('Split Array function', function() {
	
	beforeEach(function(){
		spyOn(window, 'split');
	})

	it('should use split', function(){
		//mergeSort();
		expect(window.split.calls).toBeTruthy();
	})
});
