import React from 'react'
import c from './style/Navbar.module.scss'
import MenuHandleButton from './MenuHandleButton'
import NavbarInputContainer from './NavbarInputContainer'
import TopNavbarBasket from './TopBasketItem'


export default function TopNavbar() {

    console.log('NAVBAR render')
    const containerRef = React.useRef<HTMLDivElement>(null)

    return (

        <div ref={containerRef} className={c.menu__container}>
            <div className={c.top_navbar}>
                <MenuHandleButton />
                <NavbarInputContainer />
                <TopNavbarBasket/>
            </div>
        </div>


    )
}
