function getMiddle(s)
{
  let strLength = s.length;
  let midChar = Math.floor(strLength/2);
  
  if(strLength === 1){
    return s;
  } else if(strLength % 2 === 0){
    return s.substr(midChar - 1, 2);
  } else if(strLength % 2 === 1){
    return s.substr(midChar, 1);
  }

}
