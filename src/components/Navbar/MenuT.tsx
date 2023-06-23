import React from 'react'
import { createPortal } from 'react-dom';
import c from './style/MenuT.module.scss'
import Portal from '../PORTANL EBAIYYYSUKANAYSYSYS Y SBS BN/Portsl';

interface MenuInterface {
    v: boolean
    set: React.Dispatch<React.SetStateAction<boolean>>
}


export default function MenuT({ v, set }:MenuInterface) {

    if (!v) {
        return null
    }
    return (
        <>
            {v ?
                <Portal>
                    <div onClick={() => set(v => !v)} className={c.main_wrap}>
                        <div className={c.menu_contnet_wrap}>
                        </div>
                    </div>
                </Portal>
                : null
            }
        </>
    )
}
