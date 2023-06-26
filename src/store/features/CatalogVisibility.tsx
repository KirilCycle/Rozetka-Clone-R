import {  createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
    active: boolean,
}

export const initialState: State = {
    active: false,
}

const catalogVisibility = createSlice({
    name: 'catalogVisibility',
    initialState,
    reducers: {
        setVisibility(state, action: PayloadAction<boolean>) {
            state.active = action.payload
        },
    },
})

export default catalogVisibility.reducer

export const {
    setVisibility,
} = catalogVisibility.actions





