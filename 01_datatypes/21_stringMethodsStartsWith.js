// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// Syntax: string.startsWith(substring)

let string = 'JavaScript Is My Favourite Programming Language'

console.log(string.startsWith('JavaScript'))   // true
console.log(string.startsWith('javascript'))   // false
console.log(string.startsWith('Programming'))  // false

let country = 'Morocco'

console.log(country.startsWith('Mor'))   // true
console.log(country.startsWith('mor'))   // false
console.log(country.startsWith('occo'))  //  false