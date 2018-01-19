
// console.log(decimal_to_bho(120,'B'));
// function foo() {
//     return 5;
// }
// let myVar = foo;
// console.log(foo);
// Ascending Binary Sorting
// Sort the integers in ascending order by the number of 1's
// in their binary representions.
// const __input_stdin = '';
// const __input_stdin_array = '';
// const __input_currentline = 0;
// function processStdinOn(){
//     console.log(" calling processStdinOn Function");
// }
// var a = [3,1,2,3];
// var sorted = a.sort(function (a, b) {
//     return a - b;
// });
// console.log(sorted);
// console.log('a,', a);
// function bitCount (n) {
//     var bits = 0
//     while (n !== 0) {
//       bits += bitCount32(n | 0)
//       n /= 0x100000000
//     }
//     return bits
//   }
//   console.log(bitCount32(5));
// console
// function bitCount32 (n) {
//     n = n - ((n >> 1) & 0x55555555)
//     // n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
//     return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
//   }
function binarySort(sorted) {
    var binarySortArray = sorted;
    var bitWiseSorted = [];
    for (var i = 0; i < binarySortArray.length; ++i) {
        // console.log(sorted[i]);
        var n = binarySortArray[i];
        var tenToTheFifth = Math.pow(10, 5); //100000
        if (1 <= n && n <= tenToTheFifth) {
            bitWiseSorted.push(binarySortArray[i]);
        }
    }
    return;
}
// console.log(binarySort(sorted));
// console.log(bitCount(Math.pow(2, 53) - 1)) //=> 53
// const n = 2;
// function binarySearch(arr, i) {
//     var mid = Math.floor(arr.length / 2);
//     console.log(arr[mid], i);
//     if (arr[mid] === i) {
//         console.log('match', arr[mid], i);
//         return arr[mid];
//     } else if (arr[mid] < i && arr.length > 1) {
//         console.log('mid lower', arr[mid], i);
//         return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
//     } else if (arr[mid] > i && arr.length > 1) {
//         console.log('mid higher', arr[mid], i);
//         return binarySearch(arr.splice(0, mid), i);
//     } else {
//         console.log('not here', i);
//         return -1;
//     }
// }
// var result = binarySearch(a, 100);
// console.log(result); 
