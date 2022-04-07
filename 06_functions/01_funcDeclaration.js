/**
 * Function makes code:
 *  - clean and easy to read
 *  - reusable
 *  - easy to test
 * A function can be declared or created in couple of ways:
 *  - Declaration function
 *  - Expression function
 *  - Anonymous function
 *  - Arrow function
 */

// Syntax: Function declaration: 
//declaring a function without a parameter
function functionName() {
    // code goes here
  }
  functionName() // calling function by its name and with parentheses
/**
  * Function with a parameter and return:
  * 
*/

// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square() // 4
  
  // function without parameter
  function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  
  addTwoNumbers() // a function has to be called by its name to be executed 

  function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName() // calling a function

/**
 * Function returning value
 * Function can also return values, if a function does not return values the value of the function is undefined.
 * Let us write the above functions with return.
 * From now on, we return value to a function instead of printing it.
 */

 function printFullName (){
    let firstName = 'Aymane'
    let lastName = 'Benhima'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

/**
 * Function with a parameter
 * 
 * In a function we can pass different data types(number, string, boolean, object, function) as a parameter.
 */

// function with one parameter
function functionName(parm1) {
    //code goes her
  }
  functionName(parm1) // during calling or invoking one argument needed
  
  function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  
  function square(number) {
    return number * number
  }
  
  console.log(square(10))

  // function with multiple parameters
  /**
   * function functionName(parm1, parm2, parm3,...){
    //code goes here
  }
  functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
  
   */

  
  // this function takes array as a parameter and sum up the numbers in the array
  function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));
  
  
      const areaOfCircle = (radius) => {
        let area = Math.PI * radius * radius;
        return area;
      }
  console.log(areaOfCircle(10))
  


// function declaration
​
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// Anonymous functions ==> or without name
const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }

// Function expression
const square = function(n) {
    return n * n
}
  
console.log(square(2)) // -> 4

/**
 * Self Invoking Functions
 * 
 * Self invoking functions are anonymous functions which do not need to be called to return a value.
 */

 (function(n) {
    console.log(n * n)
  })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
  let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum)

/**
 * Arrow Function
 * Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
 * Arrow function uses arrow instead of the keyword function to declare a function.
 * Let us see both function declaration and arrow function.

 */


 const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Morocco', 'Algeria', 'Tunisia', 'Egypt', 'Iraq']
  console.log(changeToUpperCase(countries))
  

  /**
   * Function with default parameters
   * Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used.
   * Both function declaration and arrow function can have a default value or values.
   */

  // syntax
// Declaring a function
function functionName(param = value) {
    //codes
  }
  
  // Calling function
  functionName()
  functionName(arg)
// Example
  function generateFullName(firstName = 'Aymane', lastName = 'Benhima') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('John', 'Doe'))

  // With Arrow function
  /**
   * const functionName = (param = value) => {
  //codes
}

// Calling function
functionName()
functionName(arg)
   */