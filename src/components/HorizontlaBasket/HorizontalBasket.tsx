import React from 'react'
import { useNavigate } from 'react-router-dom'
import { handleBasket } from '../../store/features/Basket.Slice'
import { ModifiedDeviceItem } from '../../store/features/BasketDevices'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import c from './styles/HorizontalBasket.module.scss'
import HorizontalBasketImageContainer from './components/HorizontalBasketImage'


export default function HorizontalBasket() {

    const { totalSum } = useAppSelector(state => state.basketReducer)

    let navigate = useNavigate()

    const { devicesFromBasket } = useAppSelector(state => state.basketDevcies)

    console.log(devicesFromBasket, 'FROM HORIZONTAL');

    const dispatch = useAppDispatch()

    function handleRedirect() {
        navigate(`/checkout`)
       
    }

    return (
        <>
            {totalSum > 0 ?
                <div className={c.horizontal_basket}>
                    <div className={c.text_container}>
                        <h2>
                            {`In basket ${devicesFromBasket.length} devices`}
                        </h2>
                        <p>
                            {`total sum ${totalSum}`}
                        </p>
                    </div>
                    <div className={c.photo_container}>
                        {
                            devicesFromBasket.slice(0, 3).map((dev: ModifiedDeviceItem) =>
                                <div key={dev.innerId} className={c.device_photo_container}>
                                    <HorizontalBasketImageContainer device={dev} />
                                </div>)
                        }
                    </div>
                    <div className={c.link_container}>
                        <button className={c.basket_btn} onClick={() => { dispatch(handleBasket()) }}>
                            Open Basket
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </button>
                        <button onClick={handleRedirect} className={c.order_btn} >make an order</button>
                    </div>
                </div>

                :

                null


            }
        </>
    )
}
