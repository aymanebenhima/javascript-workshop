/**
 * Joining array elements
 * 
 * join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string.
 * By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
 */
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const names = ['Aymane', 'Ouail', 'Imad', 'Kamal']

console.log(names.join()) // Aymane,Ouail,Imad,Kamal
console.log(names.join('')) //AymaneOuailImadKamal
console.log(names.join(' ')) //Aymane Ouail Imad Kamal
console.log(names.join(', ')) //Aymane, Ouail, Imad, Kamal
console.log(names.join(' # ')) //Aymane # Ouail # Imad # Kamal

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"