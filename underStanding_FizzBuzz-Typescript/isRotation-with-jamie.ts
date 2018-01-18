const A = ['h', 'i', 'j', 'k', 'l', 'm', 'n'];
const B = ['k', 'l', 'm', 'n', 'h', 'i', 'j'];
const firstItemInArray = A[0];
const secondItemInArray = A[1];
const thirdItemInArray = A[2];
let key_index = -1;
for (let i: number = 0; i <= A.length; i++) {
    console.log(i);
    // If statement  
    if (B[i] == firstItemInArray) {
        // run this 
        console.log('we have a match!!');
        key_index = i;
        console.log('key_i is: ', key_index);
        if (B[i + 1] == secondItemInArray) {
           
            if (B[i + 2] == thirdItemInArray) {
               console.log( 'Array: B has: ' + B[i], B[i+1], B[i+2]) 
            }
        }
    }

    // i +=1 ; add one to i
}

console.log('A.lenght is: ', A.length);
console.log('B.lenght is: ', B.length);