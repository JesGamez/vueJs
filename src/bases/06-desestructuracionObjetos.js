
const person = {
    name: 'Jesus',
    age: 45,
    codeName: 'Gamez',
    power: 'Dinero'
}

const { name, age, codeName, power='No tiene poder' } = person

// console.log( name )
// console.log( age )
// console.log( codeName )
// console.log( power )

const createHero = ( {name, age, codeName, power} ) => 
    ({
        id: 123456789,
        name,
        age,
        codeName,
        power 
    })

console.log( createHero( person ) )



