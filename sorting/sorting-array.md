[00:01] Each array in JavaScript has a sort method, specifically designed to sort the array. The sort method will, by default, sort in ascending order using the string Unicode code points. This was fine for sorting string arrays. For example, if I have an array with foo and bar, if I sort the array, bar will come before foo.

[00:23] There are two big words of caution with the built-in sort method. One is that it mutates an array and returns it. This catches new developers off guard, who think that sort doesn't mutate the original array and only returns a copy. You will certainly find code like this in many beginner-authored JavaScript code bases.

[00:43] Fortunately, with TypeScript, you can fix such code bases easily by annotating the array as a read-only array of strings. Now, any mutating methods like the sort method will no longer be allowed on this array. You can now fix it easily by creating a copy of the array using the array prototype slice and then calling sort. Now, the original array remains intact when we sort the copied array.

[01:15] The second word of caution with the built-in sort method is that, by default, it uses string Unicode code points to sort the items. For example, if we have an array of numbers and we go ahead and sort them, you can see that we get unexpected results. For example, 22 is appearing before 3.

[01:37] Essentially, as far as the comparison behavior is concerned, it is essentially the same as comparing AA with B. In the dictionary, AA appears before B, and similarly, 22 appears before 3.

[01:55] Whenever you are sorting anything other than strings, you should always pass in a comparer function to the sort method. A comparer function takes any two items within the array and asks you to return a comparison value between the two.

[02:13] If the first value is less than the second value, then you should return a negative number. If the two values are equal, then you should return 0If the first value is greater than the second value, then you should return a positive number.

[02:30] For numbers, all of these requirements can be met by simply returning A - B. You can see that it works as expected. It is conventional to write the comparer function in its short form.

[02:44] Now that we know how to sort numbers and strings, let's cover how to sort more complex objects. For example, here we have a list of the top movies along with their names and the year in which they were released. I'll go ahead and paste a few of the movies as well.

[03:04] We can sort these movies in ascending order of the year in which they were released by simply comparing the two year numbers, as we already know. Now, if I go ahead and log out the movies' names, you can see that they are sorted in ascending order of their year of release.

[03:25] To sort the items in descending order, we simply swap the order between the first and the second values in the comparer function. Swapping these in the parameter clues in the code reviewer to your descending order intent.

[03:38] One final thing worth mentioning is that the implementation of the sort algorithm is left open to implementing run-time. All processes implemented using algorithms that have an O of N log N average asymptotic run-time.