// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// Here I wanted to use the filter method and create a new array to push all the elements that are even, including the zero index.

function removeEveryOther(arr){
    let newArr = [];
    arr.filter((element, i)=>{
      if(i === 0 || i % 2 === 0){
        newArr.push(element);
      } 
    });
      return newArr;
  }

  removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);