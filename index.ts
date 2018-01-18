for(let index = 0; index < 101; index++) {
var isFizz = index % 3 === 0;
var isBuzz = index % 5 === 0;
var isFizzBuzz = (isFizz && isBuzz);

let result;
// console.log(index);
if (isFizzBuzz) {
    // print the desired condition
    // console.log('Fizz');
    result = 'isFizzBuzz';
} else if (isFizz) {
    // console.log('Buzz');
    result = 'isBuzz';
 } else if (isBuzz)  {
        // console.log('FizzBuzz');
        result = 'Fizz';

 }
}