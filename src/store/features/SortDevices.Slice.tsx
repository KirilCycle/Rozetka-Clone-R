import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type SortVariaty = null | 'rating' | 'expensive' | 'cheap'


interface InitialState {
    sort: SortVariaty
    limit: number
}

const initialState:InitialState= {
    sort: null,
    limit: 30,
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<SortVariaty>) {
            state.sort = action.payload
        },
        setlimit(state, action:  PayloadAction<number>) {
            state.limit = action.payload
         }
    }
})


export default sortSlice.reducer


export const { setSort, setlimit } = sortSlice.actions
