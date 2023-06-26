import React from 'react'
import InformationAboutCompanyList from '../InformationAboutCompanyList'
import { Link } from 'react-router-dom'
import c from './style/MenuContent.module.scss'
import { setVisibility } from '../../store/features/CatalogVisibility'
import { useAppDispatch } from '../../store/hooks'
import { setBasketVisibility } from '../../store/features/BasketVisibility'

interface MenuContentBeta {
    closeFn: Function
}

export default function MenuContentBeta({ closeFn }: MenuContentBeta) {

    const dispatch = useAppDispatch()

    function closeMenu(e : any ,execute : any) {
        closeFn(e)
        execute()
    }


    return (
        <div className={c.menu_content}>
            <button onClick={closeFn as any} className={c.close__button}>
                <span className="material-symbols-outlined">
                    close
                </span>
            </button>
            <div className={c.menu__header__block}>
                <h2>Shop name</h2>
            </div>

            <div onClick={(e) => closeMenu(e,  dispatch(setVisibility(true)) ) }
               className={c.menu__category}>
                <span className="material-symbols-outlined">
                    category
                </span>
                Catalog
                <div className={c.arrow__container}>

                </div>
            </div>

            <ul className={c.ul_links}>
                <Link className='link_conatiner' to={'/'}>
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
                <li onClick={(e) => closeMenu(e,dispatch(setBasketVisibility(true)) )}>
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
    )
}
