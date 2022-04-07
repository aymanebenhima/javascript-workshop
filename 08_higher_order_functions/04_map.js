// map: Iterate an array elements and modify the array elements.
// It takes a callback function with elements, index , array parameter and return a new array.

//Syntax: 

/**
 * 
 * 
 * const modifiedArray = arr.map(function (element, index, arr) {
        return element
    })
 */

    // Example: 

    const names = ['Aymane', 'Mohammed', 'Elias', 'Yassine']
    const namesToUpperCase = names.map((name) => name.toUpperCase())
    console.log(names)
    console.log(namesToUpperCase)