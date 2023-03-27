
// En caso la api falle, object vacio
const resApi = {
    personajes: ['Goku', 'Vegeta']
}

// Dara error al buscargar length de un undefined
// Solucion es ponerle la interrogacion  // personajes?
console.log(resApi.personajes?.length)


// toolkit-redux
// 1 crear proyecto
// yarn create vite
// 2 poner nombre del proyecto
// toolkit-redux
// 3 selecion react
// react // enter
// 4 selecion que se usara - js
// javascript // enter

// info // el react + vite // el vite es para poder empezar de cero y luego poder agregar el redux manualmente

// slice - es una funcion que recibe objeto // tiene nombre, initialState y reducers

// 1 crear snippet en vscode
// comand+shift+p // configure user snippets
// 2 escoger el lenguaje
// 3 habra un ejemplo comentado de como hacer el snnipet
// prefix - es el nombre del atajo
// body - lo que contiene, al poner cada linea debe estar con "" y al final una coma, menos el ultimo
// para que el cursor se ponga en un sitio // se pone $1
// para que el cursor reemplace o deje seleccionado una palabra debe estar asi 
// ${1:template}Slice
// y para un segundo reemplazo de variable es
// ${2:counter}

// rafc - crear un funcional component - snippet extension
// reduxslice - crear un slice de redux - snippet creado


