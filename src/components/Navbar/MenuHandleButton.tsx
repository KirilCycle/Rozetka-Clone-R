import React from 'react'
import { MenuContext } from '../../context'
import { createPortal } from 'react-dom';
import c from './style/Navbar.module.scss'
import MenuT from './MenuT';

export default function MenuHandleButton() {

   
    const [v, setV] = React.useState(false)

    function menuHandle() {
        setV(!v)
    }

    return (
        <div onClick={menuHandle} className={c.varenya_s_pomidorammi}>
            <span></span>
            <span></span>
            <span></span>
            {v && <MenuT v={v} set={setV}></MenuT>}
        </div>


    )
}
