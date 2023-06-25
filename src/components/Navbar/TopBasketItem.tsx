import React from 'react'
import { handleBasket } from '../../store/features/Basket.Slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import c from './style/Navbar.module.scss'
import DefaultModal from '../../UI/modals/ConditionalRenderModal';
import Basket from '../Basket/Basket';
import CloseBtn from '../../UI/buttons/CloseBtn';
import DisplatHandleModal from '../../UI/modals/DisplayHandleModal';

export default function TopNavbarBasket() {

    
    //update basket count using store which will make rerender 
    const { reload } = useAppSelector(state => state.basketStateSlice)

    const [v, setV] = React.useState(false)
    const [domSetted, setDom] = React.useState(false)

    let count;

    if (localStorage.getItem('basket') !== null) {
        count = JSON.parse(localStorage.getItem('basket') as string).length
    }
    else {
        count = 0
    }

    React.useEffect(() => {
        setDom(true)
    },[])

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
           { domSetted &&  <DisplatHandleModal  closeBtn={<CloseBtn />} portalId='portal-basket' active={v} setVisible={setV} > 
                <Basket></Basket>
            </DisplatHandleModal>

           }
        </>
    )
}

