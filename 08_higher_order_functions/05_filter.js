//Filter: Filter out items which full fill filtering conditions and return a new array.*

// Syntax: 
/**
 * 
 * 
 * 
 * 
 */
const scores = [
    { name: 'Aymane', score: 95 },
    { name: 'Ouail', score: 98 },
    { name: 'Mohammed', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Mansour', score: 85 },
    { name: 'Yassine', score: 100 },
]
  
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)