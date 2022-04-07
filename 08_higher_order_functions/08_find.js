// Find
// find: Return the first element which satisfies the condition.

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

// Example: find

const scores = [
    { name: 'Aymane', score: 95 },
    { name: 'Mohammed', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Ouail', score: 85 },
    { name: 'Mansour', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score)