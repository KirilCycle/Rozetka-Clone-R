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
import { setVisibility } from '../../store/features/CatalogVisibility'

export default function NavbarInputContainer() {

    const [value, setValue] = React.useState<string>('')
   
    // const [active, setActive] = React.useState(false)
    const { active }  = useAppSelector(state => state.catalogVisibility)

    console.log('AAAXXX _SSSS');
    const { query } = useAppSelector(state => state.searchReducer)

    const dispatch = useAppDispatch()

    let navigate = useNavigate()

    const findBtnCSS = {
        display: 'flex',
        fontWeight: '500',
        borderRadius: '0px 5px 5px 0px',
        alignItems: 'center',
        width: 'auto',
        height: 'inherit',
        padding: '7px 30px 7px 30px',
    }

    function handleCatalogVisible (bool: boolean) {
        dispatch(setVisibility(bool ));
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

            <button onClick={() => { handleCatalogVisible(true) }} className={c.category_btn}>
                <p>Catalog</p>
                <span className="material-symbols-outlined">
                    category
                </span>
            </button>


            <DefaultModal closeBtn={<CloseBtn />} active={active} setVisible={handleCatalogVisible} portalId={'catalog-portal'}>
                <Catalog></Catalog>
            </DefaultModal>

            <div className={c.input_container}>
                <input type='text' onKeyDown={handleKeyDown} onChange={(e) => { setValue(e.target.value) }} className={c.search_input} placeholder='i am looking for...'></input>

                <div className={c.find_btn_wrap} >
                    <MainButton style={findBtnCSS} onClick={navigateBySearchItem}  >Find</MainButton>
                </div>


            </div>
        </div>
    )
}
