let space = ' '           // an empty space string
let firstName = 'Aymane'
let lastName = 'Benhima'
let country = 'Morocco'
let city = 'Essaouira'
let language = 'JavaScript'
let job = 'Instructor & Full Stack Developer at YouCode'
let quote = "Talk is cheap shutup and show me the code ! ;x"
let quotWithBackTick = `Talk is cheap shutup and show me the code ! ;x`

/**
 * Connecting two or more strings together is called concatenation. Using the strings declared in the previous String section:
 */

 let fullName = firstName + space + lastName; // concatenation, merging two string together.
 console.log(fullName); // Output: Aymane Benhima

 /**
  * The Best way with ES6 (Literal template)
  */
 console.log(`The best way: ${fistName} ${lastName}`);

 /**
  * Escape Sequences in Strings
  * In JavaScript and other programming languages \ followed by some characters is an escape sequence.
  * Let's see the most common escape characters:
  * 
    \n: new line
    \t: Tab, means 8 spaces
    \\: Back slash
    \': Single quote (')
    \": Double quote (")

  */

/**
 * Usefull example:
 */

 let a = 2
 let b = 3
 console.log(`${a} is greater than ${b}: ${a > b}`)