import React from 'react'
import CheckoutListDeviceItem from './CheckoutListDeviceItem'
import { deviceFromBasket } from '../../../store/features/BasketData'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import c from '../styles/OrderList.module.scss'
import { setBasketVisibility } from '../../../store/features/BasketVisibility'

export default function OrderPage() {

  const [res, setRes] = React.useState<deviceFromBasket[]>([])
  const { devicesIdCounts } = useAppSelector(state => state.basketDataReducer)
  const { devicesFromBasket } = useAppSelector(state => state.basketDevcies)
  const { totalSum } = useAppSelector(state => state.basketReducer)

  React.useEffect(() => {

    setRes(devicesFromBasket)

  }, [totalSum, devicesFromBasket])

  const dispatch = useAppDispatch()


  return (
    <div className={c.wrap}>
      <div className={c.top_order_bar}>
        <h2>Order</h2>
        <div className={c.order_manage}>
          <p>total sum: {totalSum}</p>
          <div onClick={() => dispatch(setBasketVisibility(true))} className={c.edit_container}>
            Edit
            <span className="material-symbols-outlined">
              edit_note
            </span>
          </div>
        </div>
      </div >

      <ul className={c.devices_list} >
        {devicesFromBasket.map((el, index) => <CheckoutListDeviceItem key={el.innerId + el.color} device={el} />)}
      </ul>
    </div >
  )
}
