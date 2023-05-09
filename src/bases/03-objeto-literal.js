const persona = {
    nombre: 'Jesus',
    apellido: 'Gamez',
    edad: 45,
    direccion: {
        ciudad: 'Brazil',
        zip: 121234,
        lat: 14.1232,
        lng: 23.234234
    }
}


const persona2 = { ...persona };

persona2.nombre = 'Peter'

console.log(persona2)
console.log(persona)
