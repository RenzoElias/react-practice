import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'name',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action - enviado por parametro */ ) => {
            state.counter += 1;
        },
    }
});

export const { increment } = todoSlice.actions;