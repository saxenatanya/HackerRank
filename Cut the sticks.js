// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

// Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left.

// link-https://www.hackerrank.com/challenges/cut-the-sticks/problem?h_r=profile


function cutTheSticks(arr) {
    // Write your code here
  let totalCuts = [];
  const arrLength = arr.length;

  while (arr.length > 0) {
    let smallestValue = Math.min(...arr);
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] - smallestValue;
      count++;
    };

    for (let j = 0; j < arrLength; j++) {
      let zeroCheck = arr.indexOf(0);
      if (zeroCheck > -1) {
        arr.splice(zeroCheck, 1);
      }
    };

    totalCuts.push(count);
  };
  
  return totalCuts;
// };
