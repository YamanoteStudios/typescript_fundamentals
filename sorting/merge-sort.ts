/**
 * Chris Samuel Jr
 * chris@kayode.me
 * 
 * github: Alayode
 * 
 * merge-sort-ts
 */


 /**
 * merge sort is a recursive algorithm for sorting that decompose laerge problem of sorting an array.
 * into subproblems that are each a  step closer to being solved.
 */


export function mergeSort(array: number[]): number[] {
    if(array.length <= 1) {
      // console.log(array);
      return array;
    }
  
  //we first find the middle index by dividing the array length by two.
  const middle = Math.floor(array.length / 2 );
  // console.log(middle);
  
  // We use two variables to track the index into the left and the right segments
  const left = array.slice(0, middle);
  const right = array.slice(middle); 
  
  return merge(mergeSort(left), mergeSort(right))
  
  }
  
  /** merge (conquer) step of MergeSort */
  
  function merge(left: number[], right: number[]): number[] {
  const array: number[] = [];
  let lIndex = 0;
  let rIndex = 0;
  while(lIndex + rIndex <left.length + right.length) {
    // console.log(left[lIndex]);
    // console.log(right[rIndex]);
     const lItem = left[lIndex];
     const rItem = right[rIndex];
      if(lItem == null) {
        array.push(rItem); rIndex++;
      }
      else if (rItem == null) {
        array.push(lItem); lIndex++;
      }
      else if (lItem < rItem) {
        array.push(lItem); lIndex++;
      }
      else {
        array.push(rItem); rIndex++;
      }
    }
   return array;
  }
  
  
  const unsortedArray = [10,9,8,7,6,5,4,3,2,1,0]; // a single element in the array is already sorted.
  
  mergeSort(unsortedArray); // returns 5
  
  
  console.log(mergeSort(unsortedArray))
  