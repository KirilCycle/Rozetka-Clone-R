import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuContext } from '../../context'
import { Types } from '../../models/models'
import { useAppSelector } from '../../store/hooks'
import c from './styles/Menu.module.scss'
import InformationAboutCompanyList from '../InformationAboutCompanyList'
import { handleClickonParent } from '../../utils/handleClickonParent'


export default function Menu() {


    const { types, loading, error } = useAppSelector(state => state.typeReducer)
    const { active, menuHandle, setCatalogVisible } = React.useContext(MenuContext)

    const menuRef = React.useRef(null)

    console.log('MENU RENDER');


    function handleCatalog() {
        menuHandle()
        setCatalogVisible(true)
    }



    return (

        <div onClick={(e) => { handleClickonParent(e, () => { menuHandle() }) }} ref={menuRef} className={active ? c.menu__active : c.menu}>

            <div className={c.menu_content}>
                <button className={c.close__button} onClick={menuHandle}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <div className={c.menu__header__block}>
                    <h2>SKRIX Devices</h2>
                </div>

                <div onClick={handleCatalog} className={c.menu__category}>
                    <span className="material-symbols-outlined">
                        category
                    </span>
                    Catalog
                    <div className={c.arrow__container}>

                    </div>
                </div>

                <ul className={c.ul_links}>
                    <Link className='link_conatiner'  onClick={menuHandle} to={'/'}>
                        <li>
                            <span className="material-symbols-outlined">
                                home
                            </span>
                            <a >
                                HOME
                            </a>
                        </li>
                    </Link>
                    <li>
                        <span className="material-symbols-outlined">
                            support_agent
                        </span>
                        <a>
                            SUPPORT
                        </a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <a>
                            BASKET
                        </a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">
                            send
                        </span>
                        <a>
                            TELEGRAM BOT
                        </a>
                    </li>
                </ul>

                <div className={c.list_container}>
                    <InformationAboutCompanyList />
                </div>

            </div>


        </div>
    )
}