// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.It must return the display text as shown in the examples:

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
 