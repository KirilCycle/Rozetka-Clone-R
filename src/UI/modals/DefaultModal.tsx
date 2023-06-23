import React, { ReactNode } from 'react'
import c from './defaultModal.module.scss'
import Portal from '../../components/portals/Portsl'

interface DefaultModalProps {
    portalId: string
    children: ReactNode
    active: boolean
    setVisible: Function
}

export default function DefaultModal({ portalId, children, active, setVisible }: DefaultModalProps) {


    const modal = React.useRef<HTMLHeadingElement>(null)
    const scssTransitionTime = 400

    function close() {
        modal.current!.style.opacity = '0'
        setTimeout(() => {
            setVisible(false)
        },scssTransitionTime)
    
    }



    React.useEffect(() => {
        setTimeout(() => {
            modal.current!.style.opacity = '1'
        })
    
    }, [active])

    return (
        <>
            {active ? (
                <Portal elId={portalId}>
                    <div ref={modal} onClick={close} className={c.modal}>
                        <div onClick={(e) => e.stopPropagation()} className={c.modal_content}>
                            {children}
                        </div>
                    </div>
                </Portal>
            ) :
                null
            }
        </>
    )
}
