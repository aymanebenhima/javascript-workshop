// forEach
/*
const numbers = [1, 2, 3, 4]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers));
*/
// Simplyfing

const numbers = [1, 2, 3, 4]

const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))


let somme = 0;
const nums = [1, 2, 3, 4, 5];
nums.forEach(num => console.log(num))
console.log(somme)