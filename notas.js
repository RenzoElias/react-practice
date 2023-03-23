
// En caso la api falle, object vacio
const resApi = {
    personajes: ['Goku', 'Vegeta']
}

// Dara error al buscargar length de un undefined
// Solucion es ponerle la interrogacion  // personajes?
console.log(resApi.personajes?.length)