import { AxiosError, AxiosResponse } from "axios"
import React, { Dispatch, SetStateAction } from "react"
import { Message, MessageId, ReplyMessageId } from "./models/models"
import { SelectedSubPageType } from "./pages/SubPage/SubPage"

export type MobileSortActiveType = {
    active: boolean,
    handleMenuState: () => void

}


const defaultStateMobileSortActive = {
    active: false,
    handleMenuState: () => { }
}

export const MobileSortActive = React.createContext<MobileSortActiveType>(defaultStateMobileSortActive)


//=======>



interface MenuContextI {
    active: boolean
    menuHandle: () => void
    catalogVisible: boolean
    setCatalogVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultMenuContextI = {
    active: false,
    menuHandle: () => { },
    catalogVisible: false,
    setCatalogVisible: () => { },
}

export const MenuContext = React.createContext<MenuContextI>(defaultMenuContextI)






interface SelectedSubPageContextI {
    selected: SelectedSubPageType
    setCurSubPages: Dispatch<SetStateAction<SelectedSubPageType>>,
    currentColor: string
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>
}

const defaultSelectedSubPageContextI = {
    selected: 'All information' as SelectedSubPageType,
    setCurSubPages: () => { },
    currentColor: 'red',
    setCurrentColor: () => { }
}



export const SelectedSubPageContext = React.createContext<SelectedSubPageContextI>(defaultSelectedSubPageContextI)


// isReplyMessage,
// replyTargetYcords,
// setReplyTargetYcords,
// setLoading,
// postLoading,
// setPostLoading,
// loading,
// setIsReplyMessage,
// setReplyTarget,
// deleteQuestion,
// deleteReplyQuestion,
// replyTarget,
// postQuestion,
// postReply

export interface MessageContextI {
    isReplyMessage: boolean
    replyTargetYcords: number
    setReplyTargetYcords: React.Dispatch<React.SetStateAction<number>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    postLoading: boolean
    setPostLoading: React.Dispatch<React.SetStateAction<boolean>>
    loading: boolean
    setIsReplyMessage: React.Dispatch<React.SetStateAction<boolean>>
    setReplyTarget: React.Dispatch<React.SetStateAction<Message | null>>
    deleteQuestion: (id: string) => Promise<void>
    deleteReplyQuestion: (replyId: ReplyMessageId, id: string) => Promise<void>
    replyTarget: Message | null
    postQuestion: (value: string) => Promise<AxiosError<unknown, any> | AxiosResponse<any, any>>
    postReply: (value: string) => Promise<void>
}
async function deleteReplyQuestion(replyId: ReplyMessageId, id: MessageId) {

}

async function deleteQuestion(id: string) { }

async function postQuestion(value: string) {
    const response = {}
    return response as AxiosResponse
}

async function postReply(value: string) { }

const messageContextDefault: MessageContextI = {
    isReplyMessage: false,
    replyTargetYcords: 0,
    setReplyTargetYcords: () => { },
    setLoading: () => { },
    postLoading: true,
    setPostLoading: () => { },
    loading: true,
    setIsReplyMessage: () => { },
    setReplyTarget: () => { },
    deleteQuestion,
    deleteReplyQuestion,
    replyTarget: null,
    postQuestion,
    postReply,
}

export const MessageContext = React.createContext<MessageContextI>(messageContextDefault)


interface CountContextI {
    setInnerNum: React.Dispatch<React.SetStateAction<number>>
    innerNum: number 
}

const countContextDefault: CountContextI = {
    setInnerNum: () => { },
    innerNum: 1 
}

export const CountContext = React.createContext<CountContextI>(countContextDefault)

export const CatroryVisibleContext = React.createContext<boolean | null>(null)

