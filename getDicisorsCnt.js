//This function receives an integer, then a for loop starts at 1 and iterates until it equals the number that was passed in.

//Each time "i" can divide equally into the number passed in the variable "result" gets 1 added to it.
function getDivisorsCnt(n){
    let result = 0;
    
    for(let i = 1; i <= n; i++){
      if(n % i === 0){
        result += 1;
    }
  }
    return result;
  }
  console.log(getDivisorsCnt(30)); //result = 8