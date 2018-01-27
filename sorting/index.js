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
        console.log(array);
        return array;
    }
}
exports.mergeSort = mergeSort;
var array = [1]; // a single element in the array is already sorted.
