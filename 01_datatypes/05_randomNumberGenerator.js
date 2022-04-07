let randomNum = Math.random() // generates 0 to 0.999...

/**
 * Now, let us see how we can use random() method to generate a random number between 0 and 10:
 */


 let numBtnZeroAndTen = randomNum * 11
 
 console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99
 
 let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
 console.log(randomNumRoundToFloor)    // this gives between 0 and 10