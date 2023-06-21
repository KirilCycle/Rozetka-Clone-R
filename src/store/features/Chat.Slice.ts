import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { count } from "console"
import { DeviceI } from "../../models/models"


type deviceId = string | number

interface ChatSlice {
    chatItemsOpened: number
    topChatItems: number
    lastTop: number
    lastBottom: number


}

export const initialState: ChatSlice = {
    lastTop: 0,
    lastBottom: 0,
    topChatItems: 0,
    chatItemsOpened: 30,


}

const ChatSLice = createSlice({
    name: 'basket',
    initialState,
    reducers: {

        makeChateStepTobottom(state) {
            state.chatItemsOpened = state.chatItemsOpened + 10
            state.topChatItems = state.topChatItems + 10
        },
        makeChatStepToTop(state) {
            state.chatItemsOpened = state.chatItemsOpened - 10
            state.topChatItems = state.topChatItems - 10
        },
        setlastReplyPosition(state) {
            state.lastTop =  state.topChatItems
            state.lastBottom =  state.chatItemsOpened
        },
        setPagination(state) {
           state.topChatItems = state.lastTop
           state.chatItemsOpened = state.lastBottom
        },
        setDefaultPositions(state) {
            state.topChatItems = 0
            state.chatItemsOpened = 30
        }


    },
})

export default ChatSLice.reducer

export const { makeChateStepTobottom, makeChatStepToTop,setlastReplyPosition,setPagination,setDefaultPositions} = ChatSLice.actions
