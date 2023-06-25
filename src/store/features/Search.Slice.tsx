import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"




interface State {
    query: string,
}

export const initialState: State = {
    query: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload
        },


    },
})

export default searchSlice.reducer

export const {
    setQuery,
} = searchSlice.actions



