import { getHeroeById } from './bases/08-imp-exp'
// import { getHeroeById } from '../bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () =>  {
//         // Tarea
//         // importen el 
//         const p1 = getHeroeById(2);
//         resolve( p1 );
//         // reject( 'No se pudo encontrar el héroe' );
//     }, 2000 )

// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {

    // Creando una Promesa
    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 2000 )
    
    });


}

// Haciendo que compile la funcion, con la promesa y manejando su respuesta, con el then(del resolve) y catch(del reject)
getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );