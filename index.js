/**
 * Chris Samuel | chris@kayode.me
 */
//Building Algorithms using Typescript
// Arrays
"use strict";
/**
 * A word is an anagram of another if you can rearrange its characters to produce the second word.
 * Given two strings determines if they are anagrams of each other.
 * - 'earth' and 'heart' are anagrams
 * - 'silent' and 'listen' are anagrams
 * - 'foo' and 'bar'
 */
function areAnagrams(s1, s2) {
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
    // console.log(s1);
    // console.log(s2);
    return s1 === s2;
}
exports.areAnagrams = areAnagrams;
var evaluatedMatter = areAnagrams('earth', 'heart');
console.log(evaluatedMatter);
