import React from 'react'
import { MenuContext } from '../context'
import c from '../styles/Navbar.module.scss'

export default function MenuHandleButton() {

    const menuState = React.useContext(MenuContext)

    function menuHandle() {
        menuState.menuHandle()
    }

    return (
        <div onClick={menuHandle} className={c.varenya_s_pomidorammi}>
            <span></span>
            <span></span>
            <span></span>
        </div>

    )
}
