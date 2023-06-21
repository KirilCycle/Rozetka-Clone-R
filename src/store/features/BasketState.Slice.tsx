import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface BacketState {
    reload: boolean
}

export const initialState:BacketState = {
    reload: false
   
}

const basketStateSlice = createSlice({
    name:'basketState',
    initialState,
    reducers: {
        makeRender(state) {
          state.reload = !state.reload
        } 

    },
})

export default  basketStateSlice.reducer

export const {makeRender} = basketStateSlice.actions
