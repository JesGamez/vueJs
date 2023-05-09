
// const saludar = function saludar( n ){
//     return `Hola ${n}`
//}

const saludar = ( nombre = 'Jesus' ) => `Hola ${nombre}`

const nombre = 'Jesus'

// console.log( saludar(nombre) )

const getUser = () => ({
        uid: '123AVC',
        username: 'Jesus001'
})

console.log( getUser() )

const heroes = [{
    id:1,
    name: 'Batman'
},{
    id:2,
    name: 'Superman'
}]

// const existe = heroes.some( ( heroe ) => heroe.id === 1 );
const existe = heroes.find( ( heroe ) => heroe.id === 1 );

console.log( existe.name )


