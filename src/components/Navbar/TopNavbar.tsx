import React from 'react'
import c from './style/Navbar.module.scss'
import MenuHandleButton from './MenuHandleButton'
import NavbarInputContainer from './NavbarInputContainer'
import TopNavbarBasket from './TopBasketItem'
import DefaultModal from '../../UI/modals/DefaultModal'


export default function TopNavbar() {

    console.log('NAVBAR render')
    const containerRef = React.useRef<HTMLDivElement>(null)

    const [v, setV] = React.useState(false)

    return (

        <div ref={containerRef} className={c.menu__container}>
            <div className={c.top_navbar}>
                <MenuHandleButton />
                <NavbarInputContainer />
                <TopNavbarBasket/>
                <button onClick={() => setV(true)} >CLICOK ME</button>
            </div>
               <DefaultModal portalId='portal-basket' active={v} setVisible={setV}  ><p>SUSSSSS SS</p></DefaultModal>
        </div>


    )
}
