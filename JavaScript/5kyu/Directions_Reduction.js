function dirReduc(arr){
  // A function that reduces directions by excluding consective cardinal directions that are adjacent to each other in the list
  
  
  //opposite cardinal points
  let nS = ["NORTH","SOUTH"];
  let eW = ["EAST", "WEST"];
  
  //copy of the original array
  let arrCopy = [...arr];
  //iterator
  let currentDirection = 0;

  // checks if adajacent cardinal points in the list are opposite of each other 
  let northSouthCheck = nS.includes(arrCopy[currentDirection]) && nS.includes(arrCopy[currentDirection+1]);
  let eastWestCheck = eW.includes(arrCopy[currentDirection]) && eW.includes(arrCopy[currentDirection+1]);

  while((northSouthCheck || eastWestCheck) && arrCopy.length >= 2){
    if(northSouthCheck){
      arrCopy.splice(arrCopy[currentDirection%arrCopy.length], 1);
      arrCopy.splice(arrCopy[currentDirection%arrCopy.length + 1], 1);
      currentDirection++;
      
    } else if(eastWestCheck){
      arrCopy.splice(arr[currentDirection%arrCopy.length], 1);
      arrCopy.splice(arr[currentDirection%arrCopy.length + 1], 1);
      currentDirection++;
    } 
  }


  return arrCopy;
}

// The following should return  => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])

// The following should return => []
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) 