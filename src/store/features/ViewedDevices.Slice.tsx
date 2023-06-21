import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { SERVER_URL } from "../../consts"
import { Brands, DeviceI, Types } from "../../models/models"



export interface BrandState {
    loading: boolean
    error: null | string
    viewedDevices: DeviceI[] | []

}



export const initialState: BrandState = {
    loading: false,
    error: null,
    viewedDevices: []
}



const viewedDevices = createSlice({
    name: 'viewedDevices',
    initialState,
    reducers: {
        pushViewedDevice(state, actions: PayloadAction<DeviceI>) {
           if ( !state.viewedDevices.find((dev) => dev.id == actions.payload.id) ) {
               state.viewedDevices.unshift(actions.payload as never)
           }
           
        }
    }
})



export default viewedDevices.reducer

export const { pushViewedDevice } = viewedDevices.actions





