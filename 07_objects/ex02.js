/**
 * Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
 */

let user = {}
let user1 ={
    firstName : "someone",
}
function isEmpty(arg){
    if(Object.keys(arg).length == 0){
        return true;
    }else{
    return false;
    }
}

console.log(isEmpty(user1));