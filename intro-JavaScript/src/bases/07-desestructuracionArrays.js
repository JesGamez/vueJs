
const characteres = [ 'goku' ,  'vegeta' , 'trunks', 'Goten' ]

const [ goku, vegeta, trunks, goten ] = characteres

// const goku = characteres[0]
// const vegeta = characteres[1]
// const trunks = characteres[2]

// console.log ( goku, vegeta, trunks, goten )

const returnArray = ( [ letters, numbers ] ) => {
    return [ letters , numbers ]
}

const [ letters, numbers ] = returnArray( [ 'ABC', 123 ] )

console.log( letters , numbers )



