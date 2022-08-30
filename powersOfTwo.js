//Description

//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//This function accepts an integer and must return an array. So I first created an empty array. Then used a for loop to count up to the integer that was given. Each iteration the counter was the exponent for the number 2, and the result was pushed to the end of the array 'arr'.

function powersOfTwo(n){
    let arr = [];
    for(let i = 0; i <= n; i++){
      arr.push(2**i);
    }
    console.log(arr);
  }

  powersOfTwo(2);

  //n = 2  ==> [1, 2, 4]   [2^0, 2^1, 2^2]