import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError, AxiosHeaders } from "axios"
import { SERVER_URL } from "../../consts"
import {  Brand, Brands, DeviceI, sortDevicestypes } from "../../models/models"



export interface DeviceState {
    devices: [] | DeviceI[]
    loading: boolean
    error: AxiosError | null | string
    currentSortType: sortDevicestypes
    currentPage: number
    tottalItems: number
    limit: number
    reload: boolean
    
}

interface Params {
    brand?: Brands | Brand[] | [] | any
    type?: string
    _sort?: string
    _order?: string
    _page?: number
    _limit?: number
    name_like?: string
    faceDescription_like?:string
    q?: string
    price_gte?: number
    price_lte?: number
}

const initialState : DeviceState = {
    devices: [],
    loading: false,
    tottalItems: 0,
    currentPage: 1,
    currentSortType: '',
    error: null,
    limit: 30,
    reload: false
  
}

export const fetchProducts = createAsyncThunk('product/fetchProducts',

    //http://localhost:3001/products?type=phone&brand=apple&brand=samsung
    //_page=3&_limit=2

    async function (fetchParams: Params, { rejectWithValue }) {
        try {

            const response = await axios.get<DeviceI[]>(`${SERVER_URL}products`, { params: fetchParams})

            return response


        } catch (e) {
            return rejectWithValue((e as AxiosError).message as string)
        }
    }
)



const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSortType(state, action: PayloadAction<sortDevicestypes>) {
            state.currentSortType = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setNextPage(state) {
            state.currentPage = state.currentPage + 1
        },
        setLimit(state, action) {
            state.limit = action.payload
        },
        handleDevicesReload(state) {
            state.reload = !state.reload
        }
     
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.error = null
                state.loading = true
            },)
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.tottalItems = action.payload.headers['x-total-count'] as number
                state.devices = action.payload.data as []
            },)
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as null
            },)
    }

})

export default productsSlice.reducer


export const { setSortType, setCurrentPage, setNextPage,setLimit,handleDevicesReload} = productsSlice.actions