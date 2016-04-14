We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()


When I first read the instructions, I thought we had to return the sum of the two given numbers AND find the numbers that were missing, but we only needed the sum of the numbers missing.

As part of my Search, I came across a math website called Better Explained and one of the articles was a technique for add the numbers 1 to 100 (http://betterexplained.com/articles/techniques-for-adding-the-numbers-1-to-100/comment-page-10/#comments). Part of that article was a formula created by Gauss that simplifies this addition using the formula  [n(n+1)/2].

Another site (http://www.capacode.com/array/find-2-missing-numbers-in-array/) helped in determining how to find the sum of the missing numbers.

Armed with this info, I set out to solve the challenge.

Using Math.min() or Math.max() will provide you with min & max respectively, but they cannot be in an array, which our challenge numbers are - I used Math.max.apply(null, arr) which can pull the numbers from the array provided.

Next, I determined I could  determine the total of the array for [1, 4] but my total was off on the arrays that did not begin with 1, so back to the Better Explained site and there was the formula for starting with any number, not just 1. [(a-1)(a/2)] Basically the formula removes the numbers from min down to 1, so the formula is starting from 1. 
