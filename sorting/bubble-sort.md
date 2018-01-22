[00:00] The statement for the fizz buzz problem specifies that you need to print integers from 1 to 100. For multiples of three, instead of the number, you should print fizz. For multiples of five, instead of printing the number, you should print buzz. If the number is divisible by both three and five, instead of printing the number, you should print fizz buzz.

[00:23] It is always a good idea in a coding interview to do a quick run of the expected result without actually writing any code. Here, you will discuss that the expected output should be one, two, fizz instead of three, four, buzz instead of five, and so on.

[00:42] With this understanding out of the way, we can start writing some code. Let's pick the first requirement. Write a program that prints integers from 1 to 100. We can do that easily with the "for" loop. We will terminate the loop right before 101, and we will start the loop at 1.

[01:01] At each step in the loop, we will log out the index. If you run the application, you can see that it works as expected, printing 1 till 100, inclusive. The next requirement is that for multiples of three, we should print fizz. We can do that easily with an "if...else."

[01:18] If the index is a multiple of three, we will print out fizz, else we will print out the index, same as before. Now, if we run our application, we can see multiples of three getting replaced. The next requirement is that for multiples of five, we should print buzz. Just another "else...if" to see if it is a multiple of five, and we log out buzz.

[01:43] Now we are down to the final requirement, that for multiples of both three and five, we shall print fizz buzz. Following our previous pattern, you might be tempted to do another "else...if" to check for multiples of three and five, and log out fizz buzz.

[01:59] However, you should realize that if any of the previous conditions are true, then this combined condition check will never execute. We simply move this combined condition check to the top. The program specification is intentionally ordered in this way to catch unaware programmers off-guard, but fortunately, you will not be one of them

[02:23] If you run the application, you can see that it is a working solution to the fizz buzz problem, logging out fizz, buzz, and fizz buzz as required. A common additional request is to only do the multiple detection math once.

[02:40] It is quite easy to do by simply moving out these fizz and buzz detection expressions and storing their results in semantically named variables isFizz and isBuzz. Next, we simply use these variables instead of using the expressions.

[02:57] Another common additional request is to remove the console log duplication. You can do that by creating a variable for the result, and then storing the result and this variable for each condition, and finally logging out the result variable.

[03:12] Another thing the interviewer might request is to remove the mutation of the result variable and present a solution with the more functional approach. They might even give you the hint to use the conditional ternary operator.

[03:23] An "if...else" chain with only single assignment statements can easily be converted into a ternary chain. We will go ahead and assign the result to an expression driven by the conditional ternary operator.

[03:38] If isFizz and isBuzz, then the expression should evaluate to fizz buzz. Otherwise, if isFizz, then the expression should evaluate to fizz. If isBuzz, then the expression should evaluate to buzz.

[03:58] Finally, if none of these conditions were true, it should evaluate back to the index. Then we simply log out the result variable. Now, since there is no lazy assignment to the result variable, we can make it const as well. The code still functions the same as before.