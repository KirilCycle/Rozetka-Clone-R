import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { Brands, Types } from "../../models/models"

type BrandListItem = {
    id: string | number
    value: string
}

export interface BrandState {

    selectedBrands: [] | string[],
    currentType: Types
    AllBrands: [] | string[],
    loading: boolean
    error: null | string
    brandsList: BrandListItem[] | []
}



export const initialState: BrandState = {
    selectedBrands: [],
    brandsList: [],
    AllBrands: [],
    currentType: {} as Types,
    loading: false,
    error: null,
}


export const fetchBrands = createAsyncThunk('brand/fetchBrands',

    async function (type: string, { rejectWithValue }) {

        try {

        
            const response = axios.get<Types[]>(`http://localhost:3001/types?type_like=${type}`)


            const result = (await response).data


            return result[0] as Types

        } catch (error) {
            return rejectWithValue((error as AxiosError).message)
        }

    }
)




const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
       addSelectedBrands(state, action: PayloadAction<Brands>){
         state.selectedBrands = action.payload
       },
       setAvailableBrands (state, action) {
         state.brandsList = action.payload
       }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state) => {
                state.error = null
                state.loading = true
            },)
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.currentType = action.payload;
                state.loading = false
            },)
            .addCase(fetchBrands.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            },)
           
    }
})


export default brandSlice.reducer

export const { addSelectedBrands,setAvailableBrands} = brandSlice.actions









