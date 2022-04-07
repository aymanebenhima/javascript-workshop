//search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
//syntax: string.search(substring)

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('Java'))          // 2
console.log(string.search(/javascript/gi))  // 7