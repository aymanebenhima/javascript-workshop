/**
 * Concatenating array using concat
 * 
 * concat:To concatenate two arrays.
 */

 // Example 1:
 const firstList = [1, 2, 3]
 const secondList = [4, 5, 6]
 const thirdList = firstList.concat(secondList)
 
 console.log(thirdList) // [1, 2, 3, 4, 5, 6]

 // Example 2:
 const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

console.log(fruitsAndVegetables)