/**
 * Chris Samuel Jr
 * chris@kayode.me
 *
 * github: Alayode
 *
 * merge-sort-ts
 */
"use strict";
/**
* merge sort is a recursive algorithm for sorting that decompose laerge problem of sorting an array.
* into subproblems that are each a  step closer to being solved.
*/
function mergeSort(array) {
    if (array.length <= 1) {
        // console.log(array);
        return array;
    }
    //we first find the middle index by dividing the array length by two.
    var middle = Math.floor(array.length / 2);
    // console.log(middle);
    // We use two variables to track the index into the left and the right segments
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
exports.mergeSort = mergeSort;
/** merge (conquer) step of MergeSort */
function merge(left, right) {
    var array = [];
    var lIndex = 0;
    var rIndex = 0;
    while (lIndex + rIndex < left.length + right.length) {
        // console.log(left[lIndex]);
        // console.log(right[rIndex]);
        var lItem = left[lIndex];
        var rItem = right[rIndex];
        if (lItem == null) {
            array.push(rItem);
            rIndex++;
        }
        else if (rItem == null) {
            array.push(lItem);
            lIndex++;
        }
        else if (lItem < rItem) {
            array.push(lItem);
            lIndex++;
        }
        else {
            array.push(rItem);
            rIndex++;
        }
    }
    return array;
}
var unsortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // a single element in the array is already sorted.
mergeSort(unsortedArray); // returns 5
console.log(mergeSort(unsortedArray));
