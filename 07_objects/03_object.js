// Creating an object
/**
 * Empty object: const person = {}
 * let user = new Object(); // "object constructor" syntax
 * We can access values of object using two methods:

    using . followed by key name if the key-name is a one word
    using square bracket and a quote

 */

const person = {
    firstName: 'Aymane',
    lastName: 'Benhima',
    age: 28,
    country: 'Morocco',
    city: 'Essaouira',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'VueJs',
      'Node',
      'MongoDB',
      'Python',
      'PHP',
      'MySQL'
    ],
    getFullName: function() {
      return `${person.firstName} ${this.lastName}`
    }
  }
  person.nationality = 'Moroccan'
  person.title = 'Instructor & Web Developer'
  person.skills.push('Laravel')
  person.isMarried = false
  
  person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
  console.log(person)
  console.log(person.getPersonInfo())


// Object methods
/**
 * 
 * Object.assign:
 * To copy an object without modifying the original object
 */

 const copyPerson = Object.assign({}, person)
 console.log(copyPerson)

 /**
  * 
  * Object.keys:
  * To get the keys or properties of an object as an array
  */
console.log(`\n Object.key \n`)
const keys = Object.keys(copyPerson)
console.log(keys)
const displayskills = Object.keys(copyPerson.skills)
console.log(displayskills) 

/**
 * 
 * Object.values:
 * To get values of an object as an array
 */
console.log(`\n Object.values \n`)
const values = Object.values(copyPerson)
console.log(values)

/**
 * 
 * Object.entries:
 * To get the keys and values in an array
 */
console.log(`\n Object.entries \n`)
const entries = Object.entries(copyPerson)
console.log(entries)
