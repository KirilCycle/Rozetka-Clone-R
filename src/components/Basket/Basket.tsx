import React from 'react'
import { useNavigate } from 'react-router-dom'
import { basketItem } from '../../models/models'
import { setStartDevicesInfo } from '../../store/features/BasketData'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import c from './styles/Basket.module.scss'
import BacketList from './components/BasketList'
import MainButton from '../../UI/buttons/MainButton'
import { setBasketVisibility } from '../../store/features/BasketVisibility'

export default function Basket() {

  const { basketActive } = useAppSelector(state => state.basketReducer)
  const { reload } = useAppSelector(state => state.basketStateSlice)
  const { totalSum } = useAppSelector(state => state.basketReducer)
  const { devicesIdCounts } = useAppSelector(state => state.basketDataReducer)


  let devicesId: basketItem[] = JSON.parse(localStorage.getItem('basket') as string)

  let navigate = useNavigate()

  const dispatch = useAppDispatch()

  function handleRedirect() {
    localStorage.setItem('basketData', JSON.stringify(devicesIdCounts))
    navigate(`/checkout`)
    dispatch(setBasketVisibility(false))
  }

  React.useEffect(() => {
    dispatch(setStartDevicesInfo(devicesId))

  }, [])

  return (
    <>
      <div className={c.backet_container} >
        <div className={c.header_conatiner}>
          <p>Basket</p>
        </div>

        {devicesId?.length > 0 ?
          <BacketList devicesIdArray={devicesId} />
          :
          <>
            <div className={c.backet_image_conatiner}>
              <img src='https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg' />
            </div>
            <h2 className={c.basket_alert}>{'Basket is empty :('}</h2>
          </>
        }
        {devicesId?.length > 0 ?

          <div className={c.manage__block}>
            <h3>Total sum {totalSum}</h3>
            <MainButton style={{
              height: 'max-content',
              borderRadius: '5px',
              padding: '10px',
            }} onClick={handleRedirect} >Make an order</MainButton>
          </div>
          :
          null
        }
      </div >


    </>

  )
}
