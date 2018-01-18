for(let index = 0; index < 101; index++) {
var isFizz = index % 3 === 0;
var isBuzz = index % 5 === 0;
var isFizzBuzz = (isFizz && isBuzz);
console.log(index);
if (isFizzBuzz) {
    // print the desired condition
    console.log('Fizz');
} else if (isBuzz) {
    console.log('Buzz');
 } else if (isBuzz)  {
        console.log('FizzBuzz');
 }
}