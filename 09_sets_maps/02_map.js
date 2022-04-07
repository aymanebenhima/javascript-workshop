// Map

// Creating an empty Map
const map = new Map()
console.log(map)

// Creating an Map from array
countries = [
    ['Morocco', 'Rabat'],
    ['Algeria', 'Algeria'],
    ['Tunisia', 'Tunisia'],
  ]
const myMap = new Map(countries)
  console.log(myMap)
  console.log(myMap.size)

// Adding values to the Map

const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Morocco', 'Rabat')
countriesMap.set('Algeria', 'Algeria')
countriesMap.set('Tunisia', 'Tunisia')
console.log(countriesMap)
console.log(countriesMap.size)

// Getting a value from  Map
console.log(countriesMap.get('Morocco'))

// Check if a key exist in a map using has method. It returns true or false.
console.log(countriesMap.has('Morocco'))

//Getting all values from map using loop
for (const country of countriesMap) {
    console.log(country)
  }

  console.log(`\n\n\n Another example \n`);

  for (const [country, city] of countriesMap){
    console.log(country, city)
    }