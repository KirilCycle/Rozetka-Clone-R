import axios, { Axios, AxiosError, AxiosResponse } from 'axios'
import React, { useCallback, useState } from 'react'
import uuid from 'react-uuid'
import { IMAGINARY_USER, scrollAddition } from '../../../consts'
import { MessageContext, MessageContextI } from '../../../context'
import { Chat, Message, MessageId, ReplyMessage, ReplyMessageId } from '../../../models/models'
import c from '../styles/DeviceSubPages.module.scss'
import ChatComponent from '../../../components/QuestionsComponrnts/ChatComponent'
import Loader from '../../../components/Loader'
import QuestionsReplyInput from '../../../components/QuestionsComponrnts/QuestionsReplyInput'
import { BlobOptions } from 'buffer'
import { scrollToY } from '../../../utils/mathFunctions'
import PostQuestionIput from '../../../components/QuestionsComponrnts/PostQuestionIput'
import QuestionsChat from '../components/QuestionsChat'
import ChatInputContainer from '../../../components/QuestionsComponrnts/ChatInputContainer'
import ErrorComponent from '../../../components/QuestionsComponrnts/ErrorComponent'

interface DeviceQuestionsSubPageProops {
    questionsId: number
}

//
//       /\
//     /    \
//   /    !   \
//
//  i cant use back end pagination as i need rewrite whole chat in case i want change/post/delete one item (not my fault, it is weakneses JSON server abilities)
//
//
//

export default function DeviceQuestionsSubPage({ questionsId }: DeviceQuestionsSubPageProops) {

    const [chat, setChat] = useState<Chat>({ id: '', messages: [] })
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [reload, setReload] = useState<boolean>(false)
    const [postLoading, setPostLoading] = useState<boolean>(false)
    const [replyTargetYcords, setReplyTargetYcords] = React.useState<number>(0)
    const [isReplyMessage, setIsReplyMessage] = useState<boolean>(false)
    const [replyTarget, setReplyTarget] = useState<Message | null>(null)

    const contextContent = {
        isReplyMessage,
        replyTargetYcords,
        setReplyTargetYcords,
        setLoading,
        postLoading,
        setPostLoading,
        loading,
        setIsReplyMessage,
        setReplyTarget,
        deleteQuestion,
        deleteReplyQuestion,
        replyTarget,
        postQuestion,
        postReply
    }



    const questionsRef = React.useRef<HTMLDivElement>(null)

    async function fetchQuestions() {

        try {
            const response = await axios.get(`http://localhost:3001/chats?id=${questionsId}`)
            return await response.data[0] as Chat
        } catch (error: any) {
            setError(error.message)
            return error.message
        }

    }

    async function postReply(value: string) {

        setPostLoading(true)

        const date = new Date();

        let currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        let updatedMessagse: Chat = chat as Chat

        const current = updatedMessagse.messages.findIndex((mes: Message) => mes.id == replyTarget?.id)

        updatedMessagse.messages?.[current]?.replies?.unshift({
            from: IMAGINARY_USER,
            message: value,
            id: uuid(),
            date: currentDate
        })

        axios.put(`http://localhost:3001/chats/${questionsId}`,
            updatedMessagse

        )
            .then(function (response) { setPostLoading(false) })


        setIsReplyMessage(false)

    }




    async function postQuestion(value: string) {

        try {
            let updatedMessagse: Chat = chat as Chat

            const date = new Date();

            let currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

            let message: Message = {
                from: IMAGINARY_USER,
                message: value,
                id: uuid(),
                replies: [],
                date: currentDate

            }

            updatedMessagse.messages.unshift(message)

            const response = await axios.put(`http://localhost:3001/chats/${questionsId}`,
                updatedMessagse
            )

            setReload(prev => !prev)
            return response as AxiosResponse

        } catch (e) {
            const error = e as AxiosError;
            return error

        }



    }


    async function deleteReplyQuestion(replyId: ReplyMessageId, id: MessageId) {

        let newChat: Chat = chat as Chat

        let foundMessage = newChat.messages.findIndex((mes: Message) => mes.id === id)

        // let foundedReplyMessage =   foundMessage?.replies.find((mes: ReplyMessage) => mes.id = replyId)

        newChat.messages[foundMessage].replies = newChat.messages[foundMessage].replies.filter((repM: ReplyMessage) => repM.id !== replyId)


        console.log(newChat)

        axios.put(`http://localhost:3001/chats/${questionsId}`, newChat)

            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    async function deleteQuestion(id: string) {

        let updatedMessagse: Message[] = (chat as Chat).messages.filter((mes: Message) => mes.id !== id)
        let newObject: Chat = chat as Chat

        newObject.messages = updatedMessagse

        console.log(
            updatedMessagse, 'DELETED'
        )


        axios.put(`http://localhost:3001/chats/${questionsId}`,
            newObject
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    React.useEffect(() => {
        fetchQuestions()
            .then((response) => {

                setLoading(false)
                if (!response) {
                    setError('bad response')
                } else {
                    setChat(response)
                }
            })
    }, [])

    

    return (
        <div className={c.main__questions__wrap}>
            <MessageContext.Provider value={contextContent}>

                <div className={c.questions__wrap}>
                    <div ref={questionsRef} className={c.questions__container}>
                        {loading ?

                            <div className={c.loading_container}>
                                <Loader />
                            </div>
                            :
                            <>
                                {!error ?
                                    <QuestionsChat chat={chat} />
                                    :
                                    <ErrorComponent errorMessage={error} />
                                }
                            </>
                        }
                    </div>
                </div>
                {!error ?
                    <ChatInputContainer />
                    :
                    null
                }
            </MessageContext.Provider>
        </div>
    )

}
