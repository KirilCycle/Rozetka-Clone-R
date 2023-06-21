import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { SERVER_URL } from "../../consts"
import { Brands, DeviceI, Types } from "../../models/models"



export interface RecentlyState {
    loading: boolean
    error: null | string
    suggestionDevices: DeviceI[] | []
    page: number

}



export const initialState: RecentlyState = {
    loading: false,
    error: null,
    suggestionDevices: [],
    page: 1
}

//http://localhost:3001/suggestion?_page=1&_limit=4

export const fetchSuggestion = createAsyncThunk('suggetsions/fetchSuggestion',
    //http://localhost:3001/products?type=phone&brand=apple&brand=samsung
    //_page=3&_limit=2

    async function (none, { rejectWithValue }) {
        try {
            const response = await axios.get(`${SERVER_URL}suggestion?_page=${1}&_limit=4`)

            console.log('MAIN DATA REQUEST SUGGESTION')
            return response.data

        } catch (e) {
            return rejectWithValue((e as AxiosError).message as string)
        }
    }
)



export const fetchSuggestionNext = createAsyncThunk('suggetsions/fetchSuggestionNext',
    //http://localhost:3001/products?type=phone&brand=apple&brand=samsung
    //_page=3&_limit=2

    async function (page : number, { rejectWithValue }) {
        try {
            const response = await axios.get(`${SERVER_URL}suggestion?_page=${page}&_limit=4`)

            console.log('ADDITION DATA TO MAIN ARRAY',response.data)
            return response.data

        } catch (e) {
            return rejectWithValue((e as AxiosError).message as string)
        }
    }
)




const suggestionsDevices = createSlice({
    name: 'suggetsions',
    initialState,
    reducers: {
        pushdSuggestionDevice(state, actions: PayloadAction<DeviceI>) {
            state.suggestionDevices.push(actions.payload as never)
        },
        nextPageSuggestion(state, action) {
            state.page += 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuggestion.pending, (state) => {
                state.error = null
                state.loading = true
            },)
            .addCase(fetchSuggestion.fulfilled, (state, action) => {
                state.suggestionDevices = action.payload;
                state.loading = false
            },)
            .addCase(fetchSuggestion.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            },)

            .addCase(fetchSuggestionNext.fulfilled, (state, action) => {
                state.suggestionDevices = [...state.suggestionDevices, ...action.payload]
                state.loading = false
            },)
            .addCase(fetchSuggestionNext.rejected, (state, action) => {
               
                state.error = action.payload as string
            },)

    }
})



export default suggestionsDevices.reducer

export const { pushdSuggestionDevice, nextPageSuggestion } = suggestionsDevices.actions





