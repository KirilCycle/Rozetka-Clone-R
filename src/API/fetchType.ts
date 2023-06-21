import axios from "axios"
import { SERVER_URL } from "../consts"
import { Types } from "../models/models"

// phone / laptop / console ???
type DevicesType = string

export async function takeType(takeCurrentTypeThrowUrl: DevicesType) {

    const response = await axios.get<Types[]>(`${SERVER_URL}types?type=${takeCurrentTypeThrowUrl}`)

    return response.data[0] as Types
}

