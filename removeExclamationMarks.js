// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// This function receives a string and an easy way to remove a character like '!' is to use split. This method will take in '!' as the delimitator to remove and convert s into an array. Then I use the join to convert it back into a string.

function removeExclamationMarks(s) {
    return s.split('!').join('');
  }

console.log(removeExclamationMarks('Hello World!'));