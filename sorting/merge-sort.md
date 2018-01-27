[00:00] We will go ahead and create a function to sort using Merge Sort. It takes a number array as an argument and returns a sorted number array as its result.

[00:13] Merge Sort is a recursive algorithm. In any recursive algorithm, you will have some base conditions that terminate the recursion. For sorting, you can abort if the length of the array is less than or equal to one, as an array of one item is already sorted.

[00:30] In Merge Sort, we divide the array into two equal portions and sort them recursively. To get these two portions of the array, we first find the middle index by dividing the array length by two. We then make two equal slices of the array using array.slice and store them as left and right. For an uneven array length, the right portion will be bigger than the left one, but it shouldn't matter for us, as it will all recursively boil down to an array of length one.

[01:04] We will offload the segment sorting program recursively to Merge Sort itself by invoking it with left and right arrays. Finally, we will call the Merge function which will merge these sorted segments into a bigger sorted segment.

[01:20] Let's go ahead and write this merge function. The merge function plays the conquering role in the Merge Sort divide-and-conquer algorithm and is truly where the beating heart of Merge Sort exists. It takes the sorted left and right segments and is responsible for cleverly merging them into a single sorted array.

[01:43] We go ahead and create the array that will contain the merge result. The innovation is to simply, one by one, select the smallest item from either the left or the right segment and put that into the result, giving us the merged sorted array.

[02:02] We use two variables to track the index into the left and the right segments, L index for the left segment and R index for the right segment. We will look through all the items in the left and right segments and abort once we are out of elements in both segments.

[02:21] We store the current left and right item lookups into L item and R item to make the remaining loop logic a bit simpler. If we are out of items in the left segment, as indicated by an undefined lookup result, then we should get the next item from the right segment and increment its index.

[02:45] Else, if we are out of items in the right segment, we simply get the next item from the left segment and increment its index. Since we have both left and right items, we simply check which one is bigger. If the left item is less than the right item, we add the left item to the array and increment that index. Otherwise, we add the right item, as it is smaller, and increment the right index.

[03:22] Once the loop terminates, we should have all the items from the left and the right added one by one into the final array which represents a sorted, merged version of left and right.

[03:35] To understand the algorithm, let's run through a simple example. We will call Merge Sort with the array 4, 3, 2, 1. We expect the output to be 1, 2, 3, 4. We will logout the output of the merged routine's input left and right, along with the merge result array. We will also logout the input array whenever Merge Sort is called. This will help us see the recursion on bigger problems going down to smaller subsets.

[04:09] Now, let's run this example and get the output. You can see that we split 4, 3, 2, 1 into two smaller problems. The first one is 4, 3 which we further split into 4 and 3. We merge these single item sorted arrays to get the largest sorted array 3, 4. We then do the same for 2, 1 splitting it into 2 and 1, and merging it as the sorted 1, 2. Finally, we merge these 3, 4, 1, 2 into the sorted 1, 2, 3, 4. This is a final merged output.

[04:49] The time cost for the recursive work in Merge Sort can be shown as an equation. We have two recursive calls to Merge Sort itself, each half the size of the original problem. We then do a linear amount of work in the merge function, simply looking over the items in the left and the right segments once. Therefore, t(n)=2t(n/2) along with the linear amount of work within the merge function.

[05:27] If you solve this recursion by induction, you get an approximate upper bound run time o(nlog n).

