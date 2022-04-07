/**
 * We can convert string float number to a float number.
 * Any float number inside a quote is a string float number.
 * An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:
 * parseFloat()
 * Number()
 * Plus sign(+) concatenate
 */

// Example 1
 let num = '9.81'
 let numFloat = parseFloat(num)
 
 console.log(numFloat) // 9.81

// Example 2
let num1 = '9.81'
let numFloat1 = Number(num1)

console.log(numFloat1) // 9.81

// Example 3
let num2 = '9.81'
let numFloat2 = +num2

console.log(numFloat2) // 9.81