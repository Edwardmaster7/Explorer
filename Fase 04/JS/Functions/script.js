// for...in

let person = {
    name: 'John',
    age: 21,
    weight: 67.5
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}

