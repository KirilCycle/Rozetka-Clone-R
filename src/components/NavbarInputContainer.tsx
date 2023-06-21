import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContext } from '../context'
import c from '../styles/Navbar.module.scss'

export default function NavbarInputContainer() {

    const [value, setValue] = React.useState<string>('')

    let navigate = useNavigate()
 
    const { setCatalogVisible } = React.useContext(MenuContext)


    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {

        if (event.key === 'Enter') {
            navigate(`/search/${value.replace(/ /g, '').toLowerCase().replaceAll('/', '')} `)
            window.location.reload();
        }
    }

    function navigateBySearchItem() {

        navigate(`/search/${value.replace(/ /g, '').toLowerCase().replaceAll('/', '')}`)
        window.location.reload();
    }



    return (
        <div className={c.search__container}>
            <button onClick={() =>  {setCatalogVisible(true)}} className={c.category_btn}>
                <p>Catalog</p>
                <span className="material-symbols-outlined">
                    category
                </span>
            </button>
            <div className={c.input_container}>
                <input type='text' onKeyDown={handleKeyDown} onChange={(e) => { setValue(e.target.value) }} className={c.search_input} placeholder='i am looking for...'></input>
            <button onClick={navigateBySearchItem} className={c.find__button}>Find</button>
            </div>
        </div>
    )
}
