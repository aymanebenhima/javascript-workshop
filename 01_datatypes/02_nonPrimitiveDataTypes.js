/**
 * Non-primitive data types are modifiable or mutable.
 * We can modify the value of non-primitive data types after it gets created.
 */

/*let nums = [1, 2, 3]
nums[0] = 10
 
console.log(nums)  // [10, 2, 3]
*/
/**
 * As you can see, an array, which is a non-primitive data type is mutable.
 * Non-primitive data types cannot be compared by value.
 * Even if two non-primitive data types have the same properties and values,
 * they are not strictly equal.
 */

 let nums = [1, 2, 3]
 let numbers = [1, 2, 3]
 
 console.log(nums == numbers)  // false
 
 let userOne = {
 name:'Aymane',
 role:'developer',
 country:'Morocco'
 }
 
 let userTwo = {
 name:'Aymane',
 role:'developer',
 country:'Morocco'
 }
 
 console.log('needs',userTwo == userTwo) // false

 /**
  * Let's fixe this problem together !! xD
  */

 /**
  * Rule of thumb, we do not compare non-primitive data types.
  * Do not compare arrays, functions, or objects.
  * Non-primitive values are referred to as reference types,
  * because they are being compared by reference instead of value.
  * Two objects are only strictly equal if they refer to the same underlying object.
  */

  let numsSolution = [1, 2, 3]
  let numbersSolution = numsSolution
  
  console.log(nums == numbers)  // true
  
  let userOneSolution = {
  name:'Asabeneh',
  role:'teaching',
  country:'Finland'
  }
  
  let userTwoSolution = userOneSolution
  
  //console.log(userOneSolution == userTwoSolution)  // true