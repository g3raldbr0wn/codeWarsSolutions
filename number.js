let number = function(busStops){
    let passengers = 0;
      for(let i = 0; i < busStops.length; i++){
        passengers += busStops[i][0];
        passengers -= busStops[i][1];
      }
      return passengers;
    }

console.log(number([[10,0],[3,5],[5,8]]));