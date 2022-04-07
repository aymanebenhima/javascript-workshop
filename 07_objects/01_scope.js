function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(let i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3