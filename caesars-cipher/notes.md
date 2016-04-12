v1.0 4.11.2016

Assignment Details:
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Here are some helpful links:

String.charCodeAt()  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
String.fromCharCode() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)



Based on the definition of the cipher from WikipediA (https://en.wikipedia.org/wiki/ROT13) it seemed simple enough to add 13 to the code that was returned via charCodeAt(index), however this was not the case.

What happens is that once you get to the letter N and use basic math to add 13 to it, you are now past the letter Z. To accommodate for this, I created an array that I could loop thru. I added some conditional (if) statements that would either add 13 or subtract 13 based on certain criteria. I also allowed the blank spaces and punctuation to pass, un-changed.

Now that I had an array of ROT13 converted codes, I needed a way to get them back to letters. I used the String.fromCharCode() method. Which works great when you are passing to it a sequence of Unicode values, but I had an array of Unicode values.

So I used the apply()(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) method, which calls a function
