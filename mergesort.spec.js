// describe('Merge Sort', function(){
	
// 	var ogArray = [15, 25, 5, 17, 21],
// 	   	arr = [15, 25, 5, 17, 21],
// 	   	sorted = [5,15, 17, 21, 25];

//   	it('handles an empty array', function(){
//     	expect( mergeSort([]) ).toEqual( [] );
//   	});

// 	it('Contains the same elements as the original', function() {
//     	expect(mergeSort(ogArray).length).toBe(5);
//     	expect(mergeSort(arr)).toEqual(ogArray);
//   	});

// 	it ('returns a sorted array', function(){
// 		expect(mergeSort([5,3,2,1])).toEqual([1,2,3,5]);
// 		expect(mergeSort([1,5,4,7,3,4])).toEqual([1,3,4,4,5,7]);
// 		expect(mergeSort([1])).toEqual([1]);
// 		expect(mergeSort(ogArray)).toEqual(sorted);
// 	});

// 	it ('returns an array', function (){
// 		expect(Array.isArray(mergeSort([5,3,2,1]))).toBe(true);
// 	});

// 	// it('uses split', function(){
// 	// 	expect(split).toHaveBeenCalled();
// 	// });


// });

// describe('Split Array function', function() {
	
// 	beforeEach(function(){
// 		spyOn(window, 'split');
// 	})

// 	it('should use split', function(){
// 		expect(window.split.calls).toBeTruthy();
// 	})
// });



// describe('Merge Sort', function(){
//   it('is able to merge two sorted arrays into one sorted array', function(){
//     // test the merging algorithm
//   });
// });




'use strict';
/* global mergeSort split merge */

describe('Merge sort', function () {

  describe('split', function () {

    it('given one array, returns two arrays', function () {
      expect(split([])).toEqual([[], []]);
    });

    it('splits array of even length', function () {
      expect(split([5, 10])).toEqual([[5], [10]]);
    });

    it('splits array of odd length', function () {
      expect(split([4, 10, 20])).toEqual([[4], [10, 20]]);
    });

  });

  describe('merge', function () {

    it('given two arrays, returns an array', function () {
      expect(merge([], [])).toEqual([]);
    });

    it('given two already sorted arrays of equal length, returns sorted result array', function () {
      expect(merge([1, 5, 10], [2, 4, 11])).toEqual([1, 2, 4, 5, 10, 11]);
      expect(merge([1, 9, 10], [2, 3, 8])).toEqual([1, 2, 3, 8, 9, 10]);
    });

    it('works for arrays of unequal length', function () {
      expect(merge([1, 5, 10, 20, 21], [2, 4, 100])).toEqual([1, 2, 4, 5, 10, 20, 21, 100]);
    });

  });

  describe('mergeSort', function () {

    it('with 1 or fewer elements, returns sorted array', function () {
      expect(mergeSort([])).toEqual([]);
      expect(mergeSort([1000])).toEqual([1000]);
    });

    it('does the thing its supposed to do', function () {
      const sorted = mergeSort([9, 1994, 18, 1, -90, 1234, 56]);
      expect(sorted).toEqual([-90, 1, 9, 18, 56, 1234, 1994]);
    });

  });

});
