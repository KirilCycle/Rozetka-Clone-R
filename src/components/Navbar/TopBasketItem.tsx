import React from 'react'
import { handleBasket } from '../../store/features/Basket.Slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import c from './style/Navbar.module.scss'

export default function TopNavbarBasket() {
   
    //update item as basket count changed 
    const {totalSum} = useAppSelector(state => state.basketReducer)
   
    let count;

    if (localStorage.getItem('basket') !== null) {
        count = JSON.parse(localStorage.getItem('basket') as string).length
    }
    else {
        count = 0
    }


    const dispatch = useAppDispatch()

    function handleBacketVisible() {
        dispatch(handleBasket())

    }

    return (

        <button className={c.backet__button} onClick={handleBacketVisible}>
            <span className="material-symbols-outlined">
                shopping_basket

                {count < 1 ?
                    null
                    :
                    <p>{count}</p>
                }

            </span>

        </button>

    )
}

