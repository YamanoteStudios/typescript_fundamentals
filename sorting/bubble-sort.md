[00:00] First, we will go ahead and create a simple sorting function that explains the concept of bubble sort. The function takes an array of numbers as an argument, and will return a sorted array of numbers. Within the function, we create a copy of the original array using slice and then we return this array.

[00:25] Before returning it, we will sort it using bubble sort. Bubble sort works by looping over the input array n times. In each iteration, the goal is to bubble the highest-ranking value to the end. We loop through all the items in the array, and we simply check if the current value on the left is greater than the current value of the right.

[00:54] If so, we swap the variables at the two positions. This ensures that we keep bubbling the highest value to the last position of the array. Since we're looking up the (j+1)th item, it makes obvious sense to terminate the inner loop 1 before the last index. To demonstrate this bubbling of the highest value, let's run through a simple example.

[01:22] We will sort the array 4, 3, 2, 1. We expect the final result to be 1, 2, 3, 4. Within the function, we will log out the original array, and we will also log out the array whenever we do a swap.

[01:39] If we run this, you can see that 4 is bubbling to the end, and then 3 is bubbling to the second last position, and finally, 2 gets bubbled to the second position. This explains the concept of bubble sort and how it gets its name.

[02:05] Note that instead of always iterating n times, we can easily optimize the algorithm to terminate early. Let's duplicate the function to present a more idiomatic bubble sort implementation. We get rid of this always-in-time iterating outer loop.

[02:23] We create a variable to track if any bubbling takes place. We note it down whenever we swap a variable and break out of the loop once no more swapping is needed. Finally, we wrap the whole thing in a VAR loop that will terminate if no variable bubbling happens in an iteration.

[02:48] This implementation is similar to the previous one with the simple addition of early termination. This also explains the main real world use case of bubble sort, which is if you only have a few values that need to be swapped around, bubble sort can be pretty fast.

[03:08] In the worst case, this whole inner FOR loop of n iterations will run 0n) times, resulting in time complexity of 0n)2. Since we are doing the array swaps in place, the space complexity 0n).