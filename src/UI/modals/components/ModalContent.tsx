import React from 'react'
import { ModalContentProps } from '../../../models/uimodels'
import c from '../defaultModal.module.scss'

export default function ModalContent({closeBtn, children, close }:ModalContentProps ) {
    return (
        <div onClick={(e) => e.stopPropagation()} className={c.modal_content}>
            <div onClick={close}>
                {closeBtn}
            </div>
            {children}
        </div>
    )
}
