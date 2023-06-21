import React from 'react'
import { useAppSelector } from '../../../store/hooks'
import c from '../styles/SearchPage.module.scss'
import BrandsCheckList from '../../../components/BrandsCheckList'
import RangeContainer from '../../../components/RangeContainer'

export default function SerachPageFilter() {

   

    return (

        <div className={c.container}>
            <>
                <BrandsCheckList />
                <RangeContainer />
            </>
        </div>

    )
}
