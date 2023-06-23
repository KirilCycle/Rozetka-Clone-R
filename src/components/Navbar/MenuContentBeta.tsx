import React from 'react'
import InformationAboutCompanyList from '../InformationAboutCompanyList'
import { Link } from 'react-router-dom'
import c from './style/MenuContent.module.scss'

export default function MenuContentBeta() {
  



  const menuRef = React.useRef(null)

  console.log('MENU RENDER');

  return (
    <div className={c.menu_content}>
    <button className={c.close__button}>
        <span className="material-symbols-outlined">
            close
        </span>
    </button>
    <div className={c.menu__header__block}>
        <h2>Shop name</h2>
    </div>

    <div className={c.menu__category}>
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
  )
}
