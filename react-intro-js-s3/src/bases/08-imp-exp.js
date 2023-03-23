// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';

// Cuando se exporta por default a heroes y otra exportacion adicional es owners
// import heroes, { owners } from '../data/heroes';

import heroes from '../data/heroes';
// import heroes from '../react-intro-javascript/src/data/heroes';

// console.log( owners );




export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


