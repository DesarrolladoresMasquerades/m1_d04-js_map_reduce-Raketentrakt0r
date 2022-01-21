// Class code examples
const names = ["Marco","Carlos","Carol"];

const capitalize = (string) => {
    return string.toUpperCase()
}

const allCaps = names.map(capitalize) // ["Marco","Carlos","Carol"].map()

console.log(names,allCaps)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const someCallbackFunction = ()=> {}
const double = numbers.map( (element )=> {return element * 2} ) // numbers.map ( someCallbackFunction )

console.log(double);

const students = [
    {name: 'Rafa', color: 'Blue', age: 12},
    {name: 'Elise', color: 'Pink', age: 21},
    {name: 'Bodei', color: 'Yellow', age: 31},
    {name: 'Jorge', color: 'Red', age: 11}
    ]

    const greetings = students.map((student) => {
        return `Hello ${student.name}, you're ${student.age} years old and your fav color is ${student.color}`

    })

    greetings.forEach((el) => console.log(el)) // entraga cada uno de los elementos
    // greetings.forEach(console.log) -- regresa todo lo

    console.log(
        ["Marco","Carlos","Carol"]
        .map( () => {} )
        .length
    )

   const newNumbers = numbers
        .map( (el) => {return el * 2} )
        .filter( (el ) => {return el < 8})
        .sort( (a,b) => {return a + b} );

        console.log(newNumbers)