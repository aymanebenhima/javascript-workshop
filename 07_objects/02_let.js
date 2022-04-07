function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    const  gravity = 9.81
    console.log(gravity) // 9.81
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  for(let i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i)
  // console.log(i), Uncaught ReferenceError: i is not defined
  