// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// In this function I use the split method to create an array of characters from the string. Then the map method allows me to modify each element in the array. Each element gets an uppercase, and every element gets a lowercase repeated by the number of the index. So the index[0] will not recieve a lowercase. Then the join method converts the array back to a string and joins each element by a '-'.

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }
  
  
  let answer = accum("ZpglnRxqenU");
  
  console.log(answer);