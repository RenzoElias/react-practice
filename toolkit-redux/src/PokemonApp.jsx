import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

export const PokemonApp = () => {

  const dispatch = useDispatch()

  // useSelector // para extraer la variable del redux
  const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons )
  // const data = useSelector( pokemon )
  // console.log("data 1",data)

  useEffect(() => {

    // como ya esta memorizado, no hace falta poner en el []
    dispatch(getPokemons()) // Asincrono
    
  }, [])
  

  return (
    <>
        <h1>Pokemon APP</h1>
        <hr />
        <span>Loading: {isLoading ? 'True' : 'False'}</span>
        <ul>
          {
            pokemons.map( ({name}) => ( // se desestructura el pokemon para tomar solo el name
              <li key={name}>{name}</li>
            ))
          }
          {/* <li>Hola</li>
          <li>Hola</li>
          <li>Hola</li> */}
        </ul>

        <button
          disabled={isLoading}
          onClick={()=>dispatch(getPokemons(page))}
        >
          Next
        </button>

    </>
  )
}
