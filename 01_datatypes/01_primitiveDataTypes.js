/**
 * Now, let us see what exactly primitive and non-primitive data types mean. 
 * Primitive data types are immutable(non-modifiable) data types. 
 * Once a primitive data type is created we cannot modify it.
 */
let word = 'YouCode'

/**
 * If we try to modify the string stored in variable word,
 * JavaScript should raise an error.
 * Any data type under a single quote, double quote, or backtick quote is a string data type.
 */
word[0] = 'A'
/**
 * This expression does not change the string stored in the variable word.
 * So, we can say that strings are not modifiable or in other words immutable.
 * Primitive data types are compared by its values.
 * Let us compare different data values. See the example below:
 */
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false