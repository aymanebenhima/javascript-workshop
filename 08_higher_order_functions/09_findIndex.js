// findIndex: Return the position of the first element which satisfies the condition
const names = ['Aymane', 'Mohammed', 'Elias', 'Ouail']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result)

const age = ages.findIndex((age) => age < 20)
console.log(age)