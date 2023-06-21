import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { DeviceI } from "../../models/models"


type deviceId = string | number

export type deviceFromBasket = {
    id: deviceId
    count: number
    innerId: string
}

interface BacketState {
    devicesIdCounts: deviceFromBasket[]

}

export const initialState: BacketState = {
    devicesIdCounts: []
}

const basketDataSlice = createSlice({
    name: 'basketData',
    initialState,
    reducers: {

        dleteItemFromDeviceInfo(state, action) {
            state.devicesIdCounts = state.devicesIdCounts.filter((dev) => dev.innerId !== action.payload)

            localStorage.setItem('basketData', JSON.stringify(state.devicesIdCounts.filter((dev) => dev.innerId !== action.payload)))

        },
        setCurrentCountAtDevicesInfo(state, action) {

            for (let i = 0; i < state.devicesIdCounts.length; i++) {

                console.log(state.devicesIdCounts[i], action.payload, 'OUR SITUATION');

                if (state.devicesIdCounts[i].innerId == action.payload.innerId) {

                    state.devicesIdCounts[i].count = action.payload.count
                }
            }

        },
        pushDeviceInfo(state, action) {

            state.devicesIdCounts.push(action.payload)

            localStorage.setItem('basketData', JSON.stringify(state.devicesIdCounts))



        },


        setStartDevicesInfo(state, action) {

            const result = [];

            for (let i = 0; i < action.payload.length; i++) {

                result.push(action.payload[i])

            }

            state.devicesIdCounts = result
        }
    },
})

export default basketDataSlice.reducer

export const {
    pushDeviceInfo,
    dleteItemFromDeviceInfo,
    setStartDevicesInfo,
    setCurrentCountAtDevicesInfo
} = basketDataSlice.actions



