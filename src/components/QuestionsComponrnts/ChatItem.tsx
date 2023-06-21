import React from 'react'
import { IMAGINARY_USER } from '../../consts'
import { MessageContext } from '../../context'
import { Message } from '../../models/models'
import { setlastReplyPosition } from '../../store/features/Chat.Slice'
import { useAppDispatch } from '../../store/hooks'
import c from '../../styles/MessageItem.module.scss'
// import c from '../../../styles/DeviceSubPages.module.'


interface ChatItemProsp {
    message: Message

}

type ReplyMessageID = string | number

export default function ChatItem({ message }: ChatItemProsp) {



    const { setIsReplyMessage, setReplyTarget, deleteQuestion, deleteReplyQuestion, setReplyTargetYcords } = React.useContext(MessageContext)

    const [replyesVisible, setReplyesVisible] = React.useState(false)
    const [isDeleted, setIsDeleted] = React.useState<boolean>(false)
    const [messControllVisible, setmessControllVisible] = React.useState<boolean>(false)
    const [messReplyControllVisibleId, setmessControllReplyVisibleId] = React.useState<string | number>('none')
    const [replyIdWhichWasRemoved, setReplyIdWhichWasRemoved] = React.useState<ReplyMessageID>('')

    const dispatch = useAppDispatch()

    console.log('chatItem render')


    const ref = React.useRef<HTMLDivElement>(null)

    function handlScrollToReplyMessage() {
        if (ref.current) {
            setReplyTargetYcords(ref?.current?.offsetTop as number)
        }
    }

    return (
        <>
            <div onClick={() => {
                setmessControllVisible(false)
            }}
                ref={ref} className={isDeleted ? c.deleted : c.message}>

                <div className={c.user__container} >
                    <h3>
                        {message.from}
                    </h3>
                </div>
                <div className={c.body__container}>
                    {message.message}
                </div>
                <div className={c.message__control__block}>

                    {
                        message.from === IMAGINARY_USER ?
                            <span onClick={(e) => {
                                e.stopPropagation()
                                setmessControllVisible(true)

                            }} className="material-symbols-outlined">
                                more_vert
                            </span>
                            :
                            null
                    }
                    {
                        messControllVisible && message.from === IMAGINARY_USER ?
                            <div className={c.message__controll}>

                                <button onClick={() => {
                                    deleteQuestion(message.id)
                                    setmessControllVisible(false)
                                    setIsDeleted(true)

                                }} >
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                    delete
                                </button>

                            </div>
                            :
                            null
                    }

                </div>

                <div className={c.control_block}>

                    <button onClick={() => {
                        setIsReplyMessage(true)
                        setReplyesVisible(true)
                        setReplyTarget(message)
                        handlScrollToReplyMessage()
                        dispatch(setlastReplyPosition())

                    }}>
                        <span className="material-symbols-outlined">
                            subdirectory_arrow_right
                        </span>
                        Reply
                    </button>
                    {
                        message?.replies?.length > 0 && !replyesVisible ?
                            <p onClick={() => { setReplyesVisible(true) }}>{`replyes ${message.replies.length}`}</p>
                            :
                            null
                    }

                </div>
                {
                    replyesVisible && message.replies.length > 0 ?
                        <div className={c.replyes_block} onClick={() => { setmessControllReplyVisibleId('none') }} >
                            <>
                                {
                                    message.replies.map((rep) =>
                                        <div className={replyIdWhichWasRemoved === rep.id ? c.deleted : c.reply__message}>
                                            <div className={c.message__control__block__reply}>

                                                {
                                                    rep.from === IMAGINARY_USER ?
                                                        <>
                                                            <div className={c.ss}>
                                                                <span onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    setmessControllReplyVisibleId(rep.id)

                                                                }} className="material-symbols-outlined">
                                                                    more_vert
                                                                </span>
                                                            </div>
                                                            {
                                                                messReplyControllVisibleId == rep.id ?
                                                                    <div className={c.message__controll__reply}>

                                                                        <button onClick={() => {
                                                                            deleteReplyQuestion(rep.id, message.id)
                                                                            setReplyIdWhichWasRemoved(rep.id)
                                                                        }} >
                                                                            <span className="material-symbols-outlined">
                                                                                delete
                                                                            </span>
                                                                            delete
                                                                        </button>

                                                                    </div>
                                                                    :
                                                                    null

                                                            }
                                                        </>
                                                        :
                                                        null
                                                }
                                            </div>
                                            <div className={c.reply__message__user}>
                                                {rep.from}
                                            </div>
                                            <div className={c.reply__body}>
                                                {rep.message}
                                            </div>
                                        </div>


                                    )
                                }
                            </>
                            <h3 onClick={() => setReplyesVisible(false)}>
                                Hide
                                <span className="material-symbols-outlined">
                                    hide
                                </span>
                            </h3>
                        </div>
                        :
                        null

                }
            </div>

        </>
    )

}
