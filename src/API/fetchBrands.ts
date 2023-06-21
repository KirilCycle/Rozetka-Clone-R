import axios, { AxiosError } from "axios";
import { SERVER_URL } from "../consts";

export async function fetchBrands () {
    try {

        const response = await axios.get<string[]>(`${SERVER_URL}brands`)

        return  response.data
        
    }
    catch (e: AxiosError | any) {
       return e.message as string 
    }
} 