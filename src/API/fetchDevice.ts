import axios, { AxiosError } from "axios";
import { DeviceId, DeviceI } from "../models/models";

export async function fetchDevice(id: DeviceId) {

    try {
        const response = await axios.get(`http://localhost:3001/products?id=${id}`)
        const result = (response.data[0] as DeviceI)
        return result
    }
    catch (e) {
        const error = e as AxiosError;
        return error.message ? error.message : 'Error'
    }



}