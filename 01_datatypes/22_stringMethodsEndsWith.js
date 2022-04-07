// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
// Syntax: string.endsWith(substring)

let string = 'JavaScript Is My Favourite Programming Language'

console.log(string.endsWith('Language'))   // true
console.log(string.endsWith('language'))   // false
console.log(string.endsWith('Programming Language'))  // true

let country = 'Morocco'

console.log(country.endsWith('Mor'))   // false
console.log(country.endsWith('mor'))   // false
console.log(country.endsWith('occo'))  //  true
