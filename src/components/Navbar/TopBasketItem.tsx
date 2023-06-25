import React from 'react'
import { handleBasket } from '../../store/features/Basket.Slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import c from './style/Navbar.module.scss'
import DefaultModal from '../../UI/modals/DefaultModal';
import Basket from '../Basket/Basket';
import CloseBtn from '../../UI/buttons/CloseBtn';
import DisplatHandleModal from '../../UI/modals/DisplayHandleModal';

export default function TopNavbarBasket() {

    //update item as basket count changed 

    const [v, setV] = React.useState(false)

    let count;

    if (localStorage.getItem('basket') !== null) {
        count = JSON.parse(localStorage.getItem('basket') as string).length
    }
    else {
        count = 0
    }



  




    return (
        <>
            <button onClick={() => setV(true)} className={c.backet__button} >
                <span className="material-symbols-outlined">
                    shopping_basket

                    {count < 1 ?
                        null
                        :
                        <p>{count}</p>
                    }

                </span>

            </button>
            <DisplatHandleModal  closeBtn={<CloseBtn />} portalId='portal-basket' active={v} setVisible={setV} > 
                <Basket></Basket>
            </DisplatHandleModal>
        </>
    )
}

