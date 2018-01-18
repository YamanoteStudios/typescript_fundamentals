var A = ['h', 'i', 'j', 'k', 'l', 'm', 'n'];
var B = ['k', 'l', 'm', 'n', 'h', 'i', 'j'];
var firstItemInArray = A[0];
var secondItemInArray = A[1];
var thirdItemInArray = A[2];
var key_index = -1;
for (var i = 0; i <= A.length; i++) {
    console.log(i);
    // If statement  
    if (B[i] == firstItemInArray) {
        // run this 
        console.log('we have a match!!');
        key_index = i;
        console.log('key_i is: ', key_index);
        if (B[i + 1] == secondItemInArray) {
            if (B[i + 2] == thirdItemInArray) {
                console.log('Array: B has: ' + B[i], B[i + 1], B[i + 2]);
            }
        }
    }
}
console.log('A.lenght is: ', A.length);
console.log('B.lenght is: ', B.length);
