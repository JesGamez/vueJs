const nombre = 'Jesus'
const apellido = 'Gamez'

const nombreCompleto = `${nombre} ${apellido}`

// console.log(`Resultado: ${ 1 + 5}`)

function getSaludo(nombre){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)