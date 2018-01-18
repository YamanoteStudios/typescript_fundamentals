for(let index = 0; index < 101; index++) {
const isFizz = index % 3 === 0;
const isBuzz = index % 5 === 0;
const isFizzBuzz = (isFizz && isBuzz);

let result;

isFizz && isBuzz ? 'FizzBuzz'
      : isFizz
        ? 'Fizz'
        : isBuzz
          ? 'Buzz'
          : index;
 console.log(result);
}