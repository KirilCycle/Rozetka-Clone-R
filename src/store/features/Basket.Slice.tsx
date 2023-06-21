import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { DeviceI } from "../../models/models"


type deviceId = string | number

type deviceFromBasket = {
    id: deviceId
    count: number
}

interface BacketState {
    devicesId: [] | number[] | string[]
    basketActive: boolean
    totalSum: number
    devices: DeviceI[],
  

}

export const initialState: BacketState = {
    devicesId: [],
    basketActive: false,
    totalSum: 0,
    devices: [],
   
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        deleteDeviceById(state, actions) {
            state.devices.filter((el) => el.id === actions.payload)
        },
        handleBasket(state) {
            state.basketActive = !state.basketActive
        },
        setDevicesIdFromBasket(state, actions) {
            state.devicesId = actions.payload
        },
        setDevicesFromBasket(state, actions) {
            state.devices = actions.payload
        },
        pushDevice(state, actions) {
            if (state.devices.find((el) => el.id == actions.payload.id)) {
                return state;
            }
            else {
                state.devices.push(actions.payload)
            }
        },
        addToTotalSum(state, actions) {
            state.totalSum += actions.payload
        },
        removeFromTotalSum(state, action) {
            state.totalSum -= action.payload
        },
        setTotalSum(state, action) {
            state.totalSum = action.payload
        },
       
    },
})

export default basketSlice.reducer

export const {
    handleBasket,
    setTotalSum,
    removeFromTotalSum,
    setDevicesFromBasket,
    pushDevice,
    addToTotalSum,
    setDevicesIdFromBasket,
    deleteDeviceById
} = basketSlice.actions



