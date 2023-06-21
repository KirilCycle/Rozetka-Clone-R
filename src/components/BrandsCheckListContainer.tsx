import React from 'react'
import { useAppSelector } from '../store/hooks'
import BrandsCheckList from './BrandsCheckList'
import Loader from './Loader'



export default function BrandsCheckListContainer() {

    const getCurrentType = useAppSelector((state) => state.brandReducer)


    return (

        <>
            {getCurrentType.loading ?
                <Loader />
                :
                <BrandsCheckList />
            }

        </>


    )
}
