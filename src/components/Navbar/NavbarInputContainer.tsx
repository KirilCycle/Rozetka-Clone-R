import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContext } from '../../context'

import c from './style/Navbar.module.scss'
import Portal from '../portals/Portsl'
import Catalog from '../Catalog/Catalog'
import DefaultModal from '../../UI/modals/ConditionalRenderModal'
import CloseBtn from '../../UI/buttons/CloseBtn'
import MainButton from '../../UI/buttons/MainButton'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setQuery } from '../../store/features/Search.Slice'

export default function NavbarInputContainer() {

    const [value, setValue] = React.useState<string>('')
    const [active, setActive] = React.useState(false)

    const dispatch = useAppDispatch()

    let navigate = useNavigate()

    const { query } = useAppSelector(state => state.searchReducer)


    const findBtnCSS = {
        display: 'flex',
        fontWeight: '500',
        borderRadius: '0px 5px 5px 0px',
        alignItems: 'center',
        width: 'auto',
        height: 'inherit',
        padding: '7px 30px 7px 30px',
    }

    function redirect() {
        navigate(`/search/${value.replace(/ /g, '').toLowerCase().replaceAll('/', '')} `)
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {

        if (event.key === 'Enter') {
            redirect()
            dispatch(setQuery(value));
        }
    }

    function navigateBySearchItem() {
        redirect()
        dispatch(setQuery(value));

    }



    return (
        <div className={c.search__container}>

            <button onClick={() => { setActive(true) }} className={c.category_btn}>
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
                {/* <button onClick={navigateBySearchItem} className={c.find__button}>Find</button> */}

                <MainButton style={findBtnCSS} onClick={navigateBySearchItem}  >Find</MainButton>

            </div>
        </div>
    )
}
