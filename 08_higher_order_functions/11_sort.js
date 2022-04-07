// sort

const users = [
    { name: 'Aymane', age: 150 },
    { name: 'Ouail', age: 50 },
    { name: 'Ziyad', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users) // sorted ascending