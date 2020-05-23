// javascriptia
const x = 1
let y = 5

console.log(x, y)   // tulostuu 1, 5
y += 10
console.log(x, y)   // tulostuu 1, 15
y = 'teksti'
console.log(x, y)   // tulostuu 1, teksti
// x = 4               // aiheuttaa virheen
// TypeError: Assignment to constant variable.

const t = [1, -1, 3]

t.push(5)

// console.log(t.length) // tulostuu 4
// console.log(t[1])     // tulostuu -1

// all list elements usedd
console.log("LOOP")
t.forEach(value => {
  console.log(value)  // tulostuu 1, -1, 3, 5 omille riveilleen
  value += 1
})
console.log("LOOP + 1")
t.forEach(value => {
    console.log(value+=1)  // tulostuu (1, -1, 3, 5) + 1 omille riveilleen
    // value += 1
})


console.log("CONCAT")
const co = [1, -1, 3]

const co2 = co.concat(5)

console.log(co)  // tulostuu [1, -1, 3]
console.log(co2) // tulostuu [1, -1, 3, 5]

console.log("MAP")
const m = [1, 2, 3]

const m2 = m.map(value => value * 2)
console.log(m2)   // tulostuu [2, 4, 6]

console.log("MAP, li")
const m3 = t.map(value => '<li>' + value + '</li>')
console.log(m3)  
// tulostuu [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

console.log("DESTRUCT")
console.log("ei kun siis destrukturoiva")
const de  = [1, 2, 3, 4, 5]
const [first, second, ...rest] = de 

console.log(first, second)  // tulostuu 1, 2
console.log(rest)          // tulostuu [3, 4 ,5]

console.log("OBJECTS")
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'Filosofian tohtori',
}
  
const object12 = {
    name: 'Full Stack -websovelluskehitys',
    level: 'aineopinto',
    size: 5,
}
  
const object3 = {
    name: {
        first: 'Juha',
        last: 'Tauriainen',
    },
    grades: [2, 3, 5, 3],
    department: 'TKTL',
}

console.log("OBJECTS: PRINTING")
console.log(object1.name)         // tulostuu Arto Hellas
const fieldName = 'age' 
console.log(object1[fieldName])    // tulostuu 35

console.log("OBJECTS: INPUTTING VALUES")
object1.address = 'Tapiola'
object1['secret number'] = 12341

console.log("FUNCTIONS")
console.log("MAKING A FUNCTION")
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result)

console.log("ONE PARAMETER")
const square = p => {
    console.log(p)
    return p * p
}

console.log("SHORT FUNC")
const square2 = p => p * p

console.log("SHORT FUNC WITH MAP")
const tf = [1, 2, 3]
const tSquared = tf.map(p => p * p)
// tSquared on nyt [1, 4, 9]
console.log(tSquared)

const tSquared2 = tf.map(square)
console.log(tSquared2)

console.log("OBJECT'S METHODS")

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'Filosofian tohtori',
    greet: function() {
        console.log('hello, my name is', this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)
    },
}
  
arto.greet()  // tulostuu hello, my name is Arto Hellas

arto.growOlder = function() {
    this.age += 1
}
  
console.log(arto.age)   // tulostuu 35
arto.growOlder()
console.log(arto.age)   // tulostuu 36

arto.doAddition(1, 4)        // tulostuu 5

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)  // tulostuu 25

arto.greet()       // tulostuu hello, my name is Arto Hellas

const referenceToGreet = arto.greet
referenceToGreet() // tulostuu ainoastaan hello, my name is

console.log("CLASSES, kinda")

class Person {
constructor(name, age) {
    this.name = name
    this.age = age
}

greet() {
    console.log('hello, my name is', this.name)
    }
}

const arto = new Person('Arto Hellas', 35)
arto.greet()

const juhq = new Person('Juha Tauriainen', 48)
juhq.greet()