/**
 * Date Object
 * 
 * In JavaScript current time and date is created using JavaScript Date Object.
 * The object we create using Date object provides many methods to work with date and time.
 * 
 * getFullYear() : Get the year as a four digit number (yyyy) example 2022
 * getMonth() : Get the month as a number (0-11) example 0
 * getDate() : Get the date as a number (1-31) example 23
 * getHours() : Get the hour (0-23)  example 0
 * getMinutes() : Get the minute (0-59) 51
 * getSeconds() : Get the second (0-59) example 16
 * getMilliseconds : Get the millisecond (0-999) example 576
 * getTime() : Get the time (millisecond since January 1, 1970) example 1578092203387
 * getDay() : Get the weekday as a number (0-6) 6
 */

 const now = new Date()

 console.log(now) // 2022-03-23T15:46:41.175Z
 console.log(now.getFullYear()) 
 console.log(now.getMonth())
 console.log(now.getDate())
 console.log(now.getDay())
 console.log(now.getHours())
 console.log(now.getMinutes())
 console.log(now.getSeconds())
 console.log(now.getTime())

 // Using Date.now()
 const allSeconds = Date.now() //
console.log(allSeconds)

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds)

// Formating these values to a human readable time format: Example,

const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 