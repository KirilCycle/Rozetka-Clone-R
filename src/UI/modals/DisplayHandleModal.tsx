import React, { ReactNode } from 'react'
import c from './defaultModal.module.scss'
import Portal from '../../components/portals/Portsl'
import { ModalProps } from '../../models/uimodels'
import ModalContent from './components/ModalContent'



export default function DisplatHandleModal({ portalId, children, active, setVisible, closeBtn }: ModalProps) {


    const modal = React.useRef<HTMLHeadingElement>(null)
    const scssTransitionTime = 400

    function close() {
        modal.current!.style.opacity = '0'
        setTimeout(() => {
            setVisible(false)
        }, scssTransitionTime)

    }
    React.useEffect(() => {
     if (active) {
         setTimeout(() => {
             modal.current!.style.opacity = '1'
         })
     }
    }, [active])

    return (
        <>
            <Portal elId={portalId}>
                <div ref={modal} onClick={close} className={active ? c.modal : c.hide}>

                    {/* <div onClick={(e) => e.stopPropagation()} className={c.modal_content}>
                           <div onClick={close}>
                            {closeBtn}
                           </div>
                            {children}
                        </div> */}

                    <ModalContent close={close}  closeBtn={closeBtn}>
                        {children}
                    </ModalContent>

                </div>
            </Portal>

        </>
    )
}
