// Please see my notes & solution on my GitHub: https://github.com/tonymorristm/freeCodeCamp-exercise-solutions-notes/tree/master/sum-all-numbers-in-a-range

function sumAll(arr) {

  var max = Math.max.apply(null, arr); // using Math.max.apply(null, arr) instead of just Math.max, will give you the ability to pull the numbers from an array, where Math.max will not
  var min = Math.min.apply(null, arr);
  var unWanted = (min/2)*(min - 1); // this will be used when the array does not begin with 1, so this will remove the numbers below min - which makes the array begin with 1 so we can use the Gauss formula (n(n+1)/2 work.

	 if (max >= 10) {
	 	  total = (max/2)*(max + 1) - unWanted;
   } if (max < 10) {
	 	  total = (max/2)*(max + 1);
   }


  return total;
}

sumAll([1, 4]);
