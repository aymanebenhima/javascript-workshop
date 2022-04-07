// split(): The split method splits a string at a specified place.

let string = 'JavaScript Is My Favourite Programming Language'

console.log(string.split())     // Changes to an array -> ["JavaScript Is My Favourite Programming Language"]
console.log(string.split(' '))  // Split to an array at space -> ["JavaScript", "Is", "My", "Favourite", "Programming", "Language"]

let firstName = 'Aymane'

console.log(firstName.split())    // Change to an array - > ["Aymane"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "y", "m", "a", "n", "e"]

let countries = 'Morocco, Algeria, Tunisia, Egypt, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Morocco", " Algeria", " Tunisia", " Egypt", " and Iraq"]
console.log(countries.split(', ')) //  ["Morocco", "Algeria", "Tunisia", "Egypt", "and Iraq"]