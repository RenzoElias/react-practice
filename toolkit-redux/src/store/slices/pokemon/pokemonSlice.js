import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: { // sincronas
        startLoadingPokemons: (state, /* action - enviado por parametro */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => { // action - tiene payload: any - payload es el parametro que recibira, cuando se invoque esta funcion setPokemons
            // console.log(action)

            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons

        }
    }
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;