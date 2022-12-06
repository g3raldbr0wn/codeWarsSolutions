function nbYear(p0, percent, aug, p) {
    let total = p0;
    let n = 0;
    let percentChange = percent / 100;
  
  
    while(total < p){
      total += total * percentChange + aug;
      total = Math.floor(total);
      n += 1;
    };
    return n;
  }

  console.log(nbYear(1500, 5, 100, 5000));