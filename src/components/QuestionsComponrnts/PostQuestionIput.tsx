import React from 'react';
import { useTransition, animated } from 'react-spring';
import { MessageContext } from '../../context'
import c from './style/ChatInputs.module.scss'
import { CustomRes, handlePostThrowButton } from './chatAPI/inpustHandleFunctions';

type res = {
    status: string
}

export default function PostQuestionIput() {

    const [value, setValue] = React.useState('')
    const [postLoading, setPostLoading] = React.useState(false)
    const [verified, setVerified] = React.useState(true)
    const [delivered, setDelivered] = React.useState(false)


    const [error, setError] = React.useState<boolean>(false)

    const { postQuestion } = React.useContext(MessageContext)

    function alertTimeLive() {

        setError(false)
        setDelivered(true)


        setTimeout(() => {
            setDelivered(false)
        }, 4000)

    }

    const transition = useTransition(delivered, {
        from: { y: -20, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { opacity: 0.5 }

    })

    const transitionbadReq = useTransition(error, {
        from: { y: -20, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { opacity: 0.5 }

    })

    return (
        <div className={c.input_block}>


            {
                error ? transitionbadReq((style, item) =>

                    item ? <animated.div style={style} className='alert_error'>Ups something went wrong</animated.div>
                        :
                        ''
                )
                    :
                    null


            }

            {
                transition((style, item) =>

                    item ? <animated.div style={style} className='alert_succes'>Your comment was successesful delivered </animated.div>
                        :
                        ''
                )


            }


            <input
                className={verified ? c.input_def : c.input_wrong}
                name='post question imput' value={value}
                onChange={(e) => setValue(e.target.value)} placeholder='make a question X'>

            </input>
            <button onClick={() => {

                if (value.replaceAll(' ', '').length > 3) {
                    handlePostThrowButton(value, setValue, postQuestion, postLoading)
                        .then(res => {

                            const response = res as CustomRes

                            response.statusText == 'OK' ?
                                alertTimeLive()
                                :
                                setError(true)
                        })
                    setVerified(true)
                } else {
                    setVerified(false)
                }


            }}>
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
