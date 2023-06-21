import React from 'react'
import { useNavigate } from 'react-router-dom'
import { basketItem } from '../../models/models'
import { handleBasket } from '../../store/features/Basket.Slice'
import { setStartDevicesInfo } from '../../store/features/BasketData'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import c from './styles/Basket.module.scss'
import BacketList from './components/BasketList'
import { handleClickonParent } from '../../utils/handleClickonParent'

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
    dispatch(handleBasket())
  }

  console.log('BASKET RENDER')

  React.useEffect(() => {
    dispatch(setStartDevicesInfo(devicesId))

  }, [])




  return (
    <div onClick={(e) => { handleClickonParent(e, () => { dispatch(handleBasket()) }) }} className={basketActive ? c.backet_bloor : c.hide}>
      <div className={c.backet_container} >

        <button className={c.close__button} onClick={() => dispatch(handleBasket())}>
          <span className="material-symbols-outlined">
            close
          </span>
        </button>

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
            <button onClick={handleRedirect} >Make an order</button>
          </div>
          :
          null
        }
      </div>
    </div>
  )
}
