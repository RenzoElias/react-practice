import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

export const PokemonApp = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    // como ya esta memorizado, no hace falta poner en el []
    dispatch(getPokemons()) // Asincrono
    
  }, [])
  

  return (
    <>
        <h1>Pokemon APP</h1>
        <hr />
        <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
    </>
  )
}
