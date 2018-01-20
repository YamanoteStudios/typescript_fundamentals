/**
 * Chris Samuel | chris@kayode.me
 */
//Building Algorithms using Typescript
// Arrays
/**
 * A word is an anagram of another if you can rearrange its characters to produce the second word.
 * Given two strings determines if they are anagrams of each other.
 * - 'earth' and 'heart' are anagrams
 * - 'silent' and 'listen' are anagrams
 * - 'foo' and 'bar'
 */
function areAnagrams(s1, s2) {
    var charCount = new Map();
    for (var _i = 0, _a = s1.split(''); _i < _a.length; _i++) {
        var char = _a[_i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (var _b = 0, _c = s2.split(''); _b < _c.length; _b++) {
        var char = _c[_b];
        if (!charCount.has(char))
            return false;
        charCount.set(char, charCount.get(char) - 1);
    }
    return Array.from(charCount.values()).every(function (val) { return val === 0; });
}
console.log("listen and silent:");
console.log(areAnagrams("listen", "silent"));
console.log("foo and bar:");
console.log(areAnagrams("foo", "bar"));
