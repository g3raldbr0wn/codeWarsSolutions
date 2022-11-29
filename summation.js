var summation = function (num) {
    let total = 0;
    for(let i = num; i >= 0; i--){
      total += i;
    }
    return total;
  }


console.log(summation(8));