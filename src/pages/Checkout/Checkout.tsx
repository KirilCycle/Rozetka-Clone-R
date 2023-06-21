import React from 'react'
import CheckOutInfoPanel from './components/CheckOutInfoPanel'
import c from './styles/Checkout.module.scss'
import OrderInputsContainer from './components/OrderInputsContainer'
import OrderPage from './components/OrderList'
import AvailabelPickPoinstContent from './components/AvailabelPickPoinstContent'
import CurierForm from './components/CurierForm'
import DeliveryContent from './components/DeliveryContent'


export default function Checkout() {
  return (
    <div className={c.main_container}>

      <div className={c.content}>

        <OrderInputsContainer />

        <div className={c.order_list}>
          <OrderPage />
        </div>

        <DeliveryContent />

      </div>


      <div className={c.info_panel_container}>
        <CheckOutInfoPanel />
      </div>


    </div>

  )
}
