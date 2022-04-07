//indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
// syntax: string.indexOf(substring)

let string = 'JavaScript Is My Favourite Programming Language'

console.log(string.indexOf('P'))          // 27
console.log(string.indexOf('Programming'))       // 27
console.log(string.indexOf('programming'))       // -1
console.log(string.indexOf('a'))          // 1
console.log(string.indexOf('JavaScript')) // 0
console.log(string.indexOf('Script'))     //4
console.log(string.indexOf('script'))     // -1