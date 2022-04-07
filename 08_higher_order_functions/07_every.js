//every

// every: Check if all the elements are similar in one aspect. It returns boolean

/**
 * The every() method executes a function for each array element.
 * 
 * The every() method returns true if the function returns true for all elements.
 * 
 * The every() method returns false if the function returns false for one element.
 * 
 * The every() method does not execute the function for empty elements.
 * 
 * The every() method does not change the original array
 */

// array.every(function(currentValue, index, arr), thisValue)

const names = ['Aymane', 'Ouail', 'Elias', 'Mohammed', 2]
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)