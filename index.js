/***
 Returns the first repeated item from an array if any
@throws {Error} if there is no item repetition
*/
function repeatedItemLoops(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] === array[j])
                return array[i];
        }
    }
    throw new Error('No item repetition');
}
function repeatedItem(array) {
    var set = new Set();
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        if (set.has(item))
            return item;
        else
            set.add(item);
    }
    // throw new Error('No item repetition');
    // converted for plunker output
    // return Error('No item repetition');
    console.log('No item repetition');
}
var itemRepetition = [1, 3, 5, 9, 1];
var noItemRepetition = [1, 3, 5, 9];
console.log(repeatedItem(itemRepetition));
console.log(repeatedItem(noItemRepetition));
