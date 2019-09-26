
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"


function likes(listOfLikes){
  if(listOfLikes.length === 0){
    return "no one likes this"
  } else if(listOfLikes.length === 1){
    return `${listOfLikes[0]} likes this`
  } else if(listOfLikes.length === 2){
    return `${listOfLikes[0]} and ${listOfLikes[1]} like this`
  }else if(listOfLikes.length === 3){
    return `${listOfLikes[0]}, ${listOfLikes[1]} and ${listOfLikes[2]} like this`
  } else if(listOfLikes.length >= 4){
    return `${listOfLikes[0]}, ${listOfLikes[1]} and ${listOfLikes.length-2} others like this`
  }
 }
 