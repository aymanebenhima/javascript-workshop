// Set is a collection of elements. Set can only contains unique elements.

// Lets see how to create a set

const set = new Set()
console.log(set)

// syntax: new Set([iterable])

const languages = [
    'English',
    'Arabic',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'Arabic',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)



// Adding an element to a set
setOfLanguages.add('Amazigh')
    
// We can print the length of the set by using size
console.log(setOfLanguages.size) // 5

// Set is an iterable object and we can iterate through each elements
for (const language of setOfLanguages)
    console.log(language)

// We can also use loop to add element to a set.
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}

// We can delete an element from a set using a delete method.
console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

// The has method can help to know if a certain element exists in a set.
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

// We can clearing all the elements in the set by using clear method
companies.clear()

console.log(companies) // {}

console.log(`\n\n Usefull Example of set: \n`)
// Example 1

const langSet = new Set(languages)
console.log(langSet) 
console.log(langSet.size) 

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) 
    counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)


console.log(`\n\n Unions of sets: \n`)
//To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)
// Example 2
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)


console.log(`\n\n Intersection of sets: \n`)
//To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)
// Example 3
let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(d)
let E = new Set(e)

let f = d.filter((num) => E.has(num))
let F = new Set(f)
console.log(F)

console.log(`\n\n Difference of sets: \n`)
//To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)
// Example 4
let j = [1, 2, 3, 4, 5]
let h = [3, 4, 5, 6]

let J = new Set(j)
let H = new Set(h)

let i = j.filter((num) => !H.has(num))
let I = new Set(i)

console.log(I)