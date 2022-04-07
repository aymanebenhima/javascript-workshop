// some: Check if some of the elements are similar in one aspect. It returns boolean

const names = ['Aymane', 'Mohammed', 'Elias', 'Ouail']
const bools = [true, true, true, false]

const areSomeTrue = bools.some((b) =>  b === true) // Are all true

console.log(areSomeTrue) //true

const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false