//ength: The string length method returns the number of characters in a string included empty space.

let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Aymane'
console.log(firstName.length)  // 6

/**
 * Accessing to different characters in 'javascript' string.
 */

 let string = 'JavaScript'
 let firstLetter = string[0]
 
 console.log(firstLetter)           // J
 
 let secondLetter = string[1]       // a
 let thirdLetter = string[2]
 let lastLetter = string[9]
 
 console.log(lastLetter)            // t
 
 let lastIndex = string.length - 1
 
 console.log(lastIndex)  // 9
 console.log(string[lastIndex])    // t