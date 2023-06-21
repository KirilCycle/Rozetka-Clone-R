import React, { KeyboardEvent } from 'react';
import { MessageContext } from '../../context'
import c from './style/ChatInputs.module.scss'
import { handlePostThrowButton } from './chatAPI/inpustHandleFunctions';

interface QuestionsReplyInput {
    autoScroll: () => void
}

export default function QuestionsReplyInput({ autoScroll }: QuestionsReplyInput) {

    const [value, setValue] = React.useState<string>('')

    const [verified, setVerified] = React.useState<boolean>(true)

    const { postReply, postLoading } = React.useContext(MessageContext)


    return (
        <div className={c.input_block}>
            <input className={verified ? c.input_def : c.input_wrong} name='post question imput' value={value} onChange={(e) => setValue(e.target.value)} placeholder={`enter you reply`}></input>
            <button onClick={() => {

                if (value.replaceAll(' ', '').length > 3) {
                    handlePostThrowButton(value, setValue, postReply, postLoading)
                    autoScroll()
                    setVerified(true)
                } else {
                    setVerified(false)
                }
            }
            }>

                {postLoading ?

                    <div className={c.spiner}>
                        <span className="material-symbols-outlined">
                            refresh
                        </span>
                    </div>

                    :
                    <span className="material-symbols-outlined">
                        send
                    </span>

                }
            </button>

        </div>

    )
}
