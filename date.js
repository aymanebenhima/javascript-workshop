/**
 *  const now = new Date()

 console.log(now) // 2022-03-23T15:46:41.175Z
 console.log(now.getFullYear()) 
 console.log(now.getMonth())
 console.log(now.getDate())
 console.log(now.getDay())
 console.log(now.getHours())
 console.log(now.getMinutes())
 console.log(now.getSeconds())
 console.log(now.getTime())
 */
/**
 * Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

    YYY-MM-DD HH:mm eg. 2022-01-02 07:05
 */

const date = new Date()
let year = date.getFullYear();
let day = date.getDay();
let mo = date.getMonth();
let ti = date.getHours();
let min = date.getMinutes();
if(day <10){
    day=`0${day}`;
}
if(ti <10){
    ti=`0${ti}`;
}
if(mo <10){
    mo=`0${mo}`;
}
if(min <10){
    min=`0${min}`;
}

let fullDate = `${year}-${mo}-${day} ${ti}:${min}`

console.log(fullDate)

