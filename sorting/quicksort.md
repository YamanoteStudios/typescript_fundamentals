[00:00] We start off by creating a function that takes an array of numbers, and will return a sorted array of numbers. Within the function, we create a copy of the original array using slice(). We will return this new array, after sorting it in place using a partition subroutine. We kick off this recursive routine by passing in the array, zero for the start index and the array length for the end index.

[00:33] Now, let's go ahead and write this partitioning function. It will take an array, the start index of an array section that it needs to partition, and the upper limit of the index for the partitioning. Since it modifies the array in place, it doesn't need to return anything.

[00:53] The Quicksort algorithm is also called partition sort, because of this partitioning routine. The partitioning routine is recursive, and like any recursive function, it will have a base case that terminates the recursion. For sorting, you can abort, if the length of the partition is less than or equal to one, as an array of one item is already sorted.

[01:17] The objective in each recursive iteration is to select a pivot element and move the items in the array such that the array satisfies the following property. Items less than the pivot appear before the pivot, and items greater than the pivot appear after the pivot.

[01:36] The Quicksort algorithm is also called pivot sort due to this partitioning around the pivot. There are a few ways to select the pivot. We just go ahead and select a random index from the array subsection that was passed in.

[01:53] To make the remaining algorithm easier, we move the item at this index to the start of the array. This way we don't need to keep moving the pivot to its rightful place when we are iterating through the elements in the array. The first element of the array is a pivot. We start off by assuming that it is already in its rightful place in the array and store that as the pivot rank.

[02:20] We will loop through the items in the array, maintaining the following invariant. Items less than the pivot appear before the index for the pivot rank, followed by items greater than the pivot, followed by the index for the current item, followed by the remaining items that have yet to be seen.

[02:45] Now, let's loop through the array subsection with these invariants in mind. We end the loop before the index reaches the before point. We start the index at start plus one, as our pivot is at the start position.

[03:00] If the item at the current index is less than the pivot, then we increase the pivot rank, slide the smaller item into the section of the array that holds items less than the pivot. We can do this sliding by simply moving the item at the pivot rank to the current index. This is because the item at this incremented pivot rank should be greater than the pivot.

[03:30] After this sliding, the item at the pivot rank is again smaller than the pivot, which is one of the invariants that we are maintaining. If the item is greater than the pivot, then we just keep on looping without any changes to pivot rank.

[03:46] By the time the loop terminates, we have met our invariant, except that now there are no more new items to see. Now, we need to move the pivot to be between the items that are less than and greater than.

[04:02] If the pivot rank didn't change in the loop, then the pivot is already in its rightful place at the start of the array subsection. If the pivot rank did change during our loop, we can simply put the pivot in its rightful place by swapping it with the element at the current pivot rank.

[04:23] This is because any item at the pivot rank is definitely smaller than pivot, because of our swaps within the loop. After putting the pivot at its rightful place, the array subsection has been partitioned into items that are less than pivot, followed by the pivot, followed by items that are greater than the pivot.

[04:46] Notice that in each call to partition, not only are we putting the pivot in its rightful place, but more importantly, we are dividing the problem into two smaller problems that can be tackled independently. Items less than the pivot can be sorted independent of the items that are greater than the pivot.

[05:06] We can do this sorting by recursively calling the partition routine on the items less than and items greater than the pivot. The reason why the algorithm is named Quick, is because of its very low memory overhead, since we are doing the partitioning in place, one by one.

[05:27] At a high-level, randomly selecting a pivot gives us a pivot that is in best, 25 to 75 percent rank in a given set of elements at about half the times. This gives us a fairly consistent decreasing problem size, which brings Quicksort's average runtime to O(nlog n), similar to Merge sort.