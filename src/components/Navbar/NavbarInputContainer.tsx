import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContext } from '../../context'

import c from  './style/Navbar.module.scss'
import Portal from '../portals/Portsl'
import Catalog from '../Catalog/Catalog'
import DefaultModal from '../../UI/modals/DefaultModal'
import CloseBtn from '../../UI/buttons/CloseBtn'

export default function NavbarInputContainer() {

    const [value, setValue] = React.useState<string>('')

    let navigate = useNavigate()
 
    const [active, setActive] =  React.useState(false)


    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {

        if (event.key === 'Enter') {
            navigate(`/search/${value.replace(/ /g, '').toLowerCase().replaceAll('/', '')} `)
           
        }
    }

    function navigateBySearchItem() {

        navigate(`/search/${value.replace(/ /g, '').toLowerCase().replaceAll('/', '')}`)
       
    }



    return (
        <div className={c.search__container}>
            
            <button onClick={() =>  {setActive(true)}} className={c.category_btn}>
                <p>Catalog</p>
                <span className="material-symbols-outlined">
                    category
                </span>
            </button>
             
            
                <DefaultModal closeBtn={<CloseBtn />} active={active} setVisible={setActive} portalId={'catalog-portal'}>
                    <Catalog></Catalog>
                </DefaultModal>
             

             

            <div className={c.input_container}>
                <input type='text' onKeyDown={handleKeyDown} onChange={(e) => { setValue(e.target.value) }} className={c.search_input} placeholder='i am looking for...'></input>
            <button onClick={navigateBySearchItem} className={c.find__button}>Find</button>
            </div>
        </div>
    )
}
