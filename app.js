//Object.prototype
function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date(dob)
}

// Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName
}

// Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

const john = new Person('James', 'Harden', '8-12-90')
const mary = new Person('Mary', 'Harden', 'March 20 1992')

console.log(john.calculateAge())
console.log(mary.getFullName())
mary.getsMarried('Smith')
console.log(mary.getFullName())
console.log(mary.hasOwnProperty('firstName'))

const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName
    },
}

const maryAnne = Object.create(personPrototypes)
maryAnne.firstName = 'Mary'
maryAnne.lastName = 'Williams' 
maryAnne.age = 30

console.log(maryAnne.greeting())

const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
})

console.log(brad)