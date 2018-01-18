// Working with one away strings
/***
 * Write a function that takes two string s and returns true
 * if they are one away from each other.
 * 
 * 
 */

let s1 = "abcde";
let s2 = "abfde";

function isOneAwayFromEachOther(stringOne,stringTwo) {

    if(stringOne.length != stringTwo.length) { return false;}
// log the two strings to the console.
// console.log('stringOne: ',stringOne);
// console.log('stringTwo: ',stringTwo);
var indexNumber = -1;
var equalChars = 0;
var unEqualChars = 0;
for(let theLetter of stringOne) {
    indexNumber += 1;
    // console.log('stringOne['+ indexNumber + ']', theLetter);
    // console.log('stringTwo['+ indexNumber + ']', theLetter);
    if(stringOne[indexNumber] == stringTwo[indexNumber] ) {
        console.log('both characters are equal!!');
    } else if(stringOne[indexNumber] != stringTwo[indexNumber]) {
        console.log('@ Position: ' + indexNumber + ' The Characters: ' + stringOne[indexNumber] + ' & ' + stringTwo[indexNumber]);
        console.log('Hmm... these two are not equal the strings do not match!!');
        unEqualChars += 1;
         
    }
}

}

console.log(isOneAwayFromEachOther(s1,s2));


