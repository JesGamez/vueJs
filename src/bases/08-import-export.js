// import { owners } from './data/heroes'
import superHeroes from '../data/heroes'

// import heroes from "./data/heroes"

// console.log( owners )

// const [ dc, Marvel ] = owners

// console.log( dc )
// console.log( Marvel )

 export const getHeroById = ( id ) => ( 
        superHeroes.find( ( heroes ) => heroes.id === id) 
    )

 export const getHeroesByOwner = ( ownersName ) => ( 
        superHeroes.filter( ( heroes ) => heroes.owner === ownersName ) 
    )


// import { getHeroesByOwner, getHeroById } from './bases/08-import-export'

// console.log( getHeroById(1) )

// console.log( getHeroesByOwner('Marvel') )