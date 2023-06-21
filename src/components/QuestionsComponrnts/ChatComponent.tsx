import React from 'react'
import { IMAGINARY_USER } from '../../consts'
import { Chat } from '../../models/models'
import ChatItem from './ChatItem'
import QuestionsChat from '../../pages/SubPage/components/QuestionsChat'


interface ChatComponentProps {
    chat: Chat
}

export default function ChatComponent({ chat }: ChatComponentProps) {

    console.log('chat render')

    return (
        <QuestionsChat chat={chat}/>
    )
}

