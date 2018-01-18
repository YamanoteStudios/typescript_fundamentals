var array_A = [1, 3, 4, 6, 7, 9];
var array_B = [1, 2, 4, 5, 9, 10];
function commonElements(array_A, array_B) {
    var pointerOne = 0;
    var pointerTwo = 0;
    var result = []; // an empty list of arrayList
    while (pointerOne < array_A.length && pointerTwo < array_B.length) {
        // for(let item in array_A) {
        // console.log(array_A[pointerOne]);
        // console.log(array_B[pointerTwo]);
        // if both items match add the number to results array. 
        if (array_A[pointerOne] == array_B[pointerTwo]) {
            result.push(array_A[pointerOne]); // [1,4]
            // console.log(array_A[pointerOne]); 
            pointerOne += 1;
            pointerTwo += 1;
        }
        else if (array_A[pointerOne] > array_B[pointerTwo]) {
            pointerTwo += 1;
        }
        else {
            pointerOne += 1;
        }
    }
    return result;
}
console.log(commonElements(array_A, array_B));
/**
 * Write a function tht returns the common elements ( as an array )
 * between two sorted arrays of integers.
 *
 * First Challenging problem is that we don't know the size of the array outpu array beforehand
 */
