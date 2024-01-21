/*
    Function() constructor
    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' is walking'
    }
}
const mayk = new Person("Mayk")
const john = new Person("John")

console.log(mayk)
console.log(john)

