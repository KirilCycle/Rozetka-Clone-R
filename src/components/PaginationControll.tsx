import React from 'react'
import { DeviceI } from '../models/models'
import { handleBasket } from '../store/features/Basket.Slice'
import { setCurrentPage, setNextPage } from '../store/features/Devices.Slice'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'
import { getPages } from '../utils/pagination'
import DeviceItem from './DeviceItem'

interface PaginationControllProps {
    pagesArray: number[]
}

export default function PaginationControll() {

    const dispacth = useAppDispatch()
   
    const { tottalItems, limit, currentPage } = useAppSelector(state => state.productReducer)
    
    const [pagesArray, setPagesArray] = React.useState<number[]>([])


    React.useEffect(() => {
        setPagesArray(getPages(limit, tottalItems))
    }, [])



    return (
        <div className={c.pages_conatiner}>
            {pagesArray.length > 1 ?
                <>
                    {pagesArray.map((el) =>
                        <button key={el} className={el == currentPage ? c.page__button_active : c.page__button} onClick={() => { dispacth(setCurrentPage(el)) }} >
                            {el}
                        </button>
                    )}
                </>
                :
                null
            }
            {
                currentPage !== pagesArray[pagesArray.length - 1] && pagesArray.length > 1 ?
                    <button className={c.page__button__next} onClick={() => { dispacth(setNextPage()) }}>Next page</button>
                    :
                    null
            }

        </div>
    )
}
