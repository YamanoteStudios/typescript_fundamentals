[00:00] We will go ahead and create a function for insertion sort that takes a number array and returns a sorted number array. Before we begin, we create a copy of the original array using slice. We will return this array after sorting it in place.

[00:19] The basic idea of insertion sort is to mentally divide the array into a sorted left section and an unsorted right section. We will move an item one by one from the unsorted right section into its rightful place in the sorted left section.

[00:36] The code follows a similar pattern. We look through all the items in the array, skipping the first one, as a single item is already sorted.

[00:46] We will select the current array item and store it in the current variable. Storing the item in a variable opens up a hole at the i-th position in the array that we can use to slide items one by one, if they are bigger than the current item.

[01:03] We will use j to keep track of which item we are comparing against a current item. We will continue to do comparisons, until we arrive at the head of the array, or the item at the j-th position is no longer smaller than the current item.

[01:20] Within the loop, we will keep on sliding the item at the j-th position to the right, that is the (j+1)-th position. Then, we continue the loop to test against the next j-th index.

[01:35] Once the loop terminates, j is either less than zero, that is we have fallen off the start of the array, or it means that the item at j is smaller than the current item. In both these cases, we should put the current item at the (j+1)-th position.

[01:53] Once the autoloop completes, our sorted left section is equal to the whole array, and each item has been placed into its rightful place on the left. Therefore, the whole array is sorted.

[02:07] To understand the algorithm a bit better, let's look at an example. We will sort the array 4, 3, 2, 1. We expect the final result to be 1, 2, 3, 4.

[02:21] We will log out the array before sorting and after sorting. You will also log out the left section of the array we keep sorted, and the current item we are going to place into that sorted subsection.

[02:37] You can see that we start with a single sorted item of 4, and we put 3 into its rightful place. Next, we move 2 into its rightful place, and finally the current item of 1 into its rightful place to give us the sorted array.

[02:53] The algorithm is called insertion sort, because we insert the current item one by one to its rightful place in the sorted subsection of the array. I'll go ahead and [indecipherable] now.

[03:03] In different attritions, for the worst case, the inner loop will run as many times as the length of the left array section, so the overall time complexity of the algorithm can be represented by the summation 1, 2, 3, up till n-1.

[03:25] If it went all the way up until n, it becomes a fairly familiar summation that's a result of n(n-1)/2, or o(n^2). Since we are doing the array item move in place, the space complexity is o(n).