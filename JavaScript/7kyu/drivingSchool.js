function passed (list) { 

  const passed = list.filter(passingScore => passingScore <= 18)
  
  if(passed.length === 0 ){
    return "No pass scores registered."
  }else{
    const sum = passed.reduce((accumulator, currentValue) => accumulator + currentValue)
  
    return Math.round(sum/passed.length)
  }
  
} 