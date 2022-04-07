// includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

let string = 'JavaScript Is My Favourite Programming Language'

console.log(string.includes('Programming'))     // true
console.log(string.includes('programming'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Morocco'

console.log(country.includes('mor'))     // false
console.log(country.includes('Mor'))     // true
console.log(country.includes('occo'))    // true
console.log(country.includes('Occo'))    // false