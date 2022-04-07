/**
 * 
 * In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.
 * 
 * setInterval
 * setTimeout
 */

// setInterval
/**
 * Syntax:
 * 
 * 
    function callback() {
        // code goes here
    }
    setInterval(callback, duration)
    function sayHello() {
        console.log('Hello')
    }
    setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s
 */



//SetTimeout
/**
 * 
 * function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds
*/

function sayHello() {
   console.log('Hello')
 }
 setTimeout(sayHello, 2000)