import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

// asincrono // props por default page = 0
export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons())

        // TODO: realizar peticion http // offset - significa desde que pagina
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json();
        // console.log(data)
        // const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        // console.log(resp)
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        console.log(data)

        dispatch(setPokemons( { pokemons: data.results, page: page + 1 } ))
        
    }
}


