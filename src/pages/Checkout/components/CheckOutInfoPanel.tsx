import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import c from '../styles/CheckOutInfoPanel.module.scss'
import PromocodeContent from './PromocodeContent'

export default function CheckOutInfoPanel() {

   const { totalSum } = useAppSelector(state => state.basketReducer)
   const { devicesFromBasket, totalDevicesNumber } = useAppSelector(state => state.basketDevcies)
   const [total, setTotal] = React.useState(devicesFromBasket.length)
  
   const dispacth = useAppDispatch()


   function setDevicesNumber() {

      let result = 0

      for (let i = 0; i < devicesFromBasket.length; i++) {

         if (devicesFromBasket[i].count) {

            result += devicesFromBasket[i].count

         } else {
            result += 1
         }

      }

      setTotal(result)

   }

   React.useEffect(() => {

      setDevicesNumber()

   }, [totalSum])

   return (
      <div className={c.checkout_infro_panle_wrap}>
        
        <PromocodeContent/>
        

         <div className={c.content}>

            <h1>Together</h1>
            <div className={c.text_container}>
               <ul className={c.info_ul_list}>
                  <li>
                     <dt className={c.checkout_total_label}>
                        {total} product for the sum
                     </dt>
                     <dt className={c.checkout_total__value} >
                        {totalSum}
                     </dt>
                  </li>
                  <li>
                     <dt className={c.checkout_total_label}>
                        Shipping cost
                     </dt>
                     <dt className={c.checkout_total__value} >
                        according to the carrier's tariffs
                     </dt>
                  </li>
                  <li>
                     <dt className={c.checkout_total_label}>
                        Total sum
                     </dt>
                     <dt className={c.checkout_total__sum} >
                        {totalSum}₴
                     </dt>
                  </li>
               </ul>
            </div>
            <button className={c.confirm_btn}>Confirm order</button>
            <div className={c.addition_info_container}>
               <h4>
                  By confirming the order, I accept the following conditions:
               </h4>
               <ul>
                  <li>regulations on the processing and protection of personal data</li>
                  <li>user agreement</li>
               </ul>
            </div>
         </div>

      </div>
   )
}
