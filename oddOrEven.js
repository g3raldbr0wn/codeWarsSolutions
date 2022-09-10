// ask:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// In this function I set up a counter variable then used a forEach method to add each element in the array to the counter. Then a conditional to see if the result is even or odd.

function oddOrEven(array) {
    let counter = 0;
    array.forEach(element => {
      counter += element;
    });
    let result = counter % 2 === 0? 'even': 'odd';
    return result;
  }


  console.log(oddOrEven([0]));// 'even'
  console.log(oddOrEven([0, 1, 4]));// 'odd'
  console.log(oddOrEven([0,-1,-5]));// 'even'