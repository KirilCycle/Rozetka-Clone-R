import React from 'react'
import { SelectedSubPageContext } from '../../../context'
import { BasketDevicesIdArray, basketItem, DeviceI, DeviceId } from '../../../models/models'
import { makeRender } from '../../../store/features/BasketState.Slice'
import { handleBasket } from '../../../store/features/Basket.Slice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import c from '../styles/DevicePage.module.scss'
import { pushDeviceInfo } from '../../../store/features/BasketData'
import uuid from 'react-uuid'


interface DeviceInfoPanelProps {
    device: DeviceI

}

export default function DeviceInfoPanel({ device }: DeviceInfoPanelProps) {


    const { currentColor, setCurrentColor } = React.useContext(SelectedSubPageContext)
    const { selected } = React.useContext(SelectedSubPageContext)
    const { reload } = useAppSelector(state => state.basketStateSlice)
    const parsedBasket = JSON.parse(localStorage.getItem('basket') as string)
    const [currentBasket, setCurrentBasket] = React.useState<basketItem[]>([])
    const dispatch = useAppDispatch()


    React.useEffect(() => {
        if (Array.isArray(parsedBasket)) {
            setCurrentBasket(parsedBasket)
        } else {
            setCurrentBasket([])
        }
    }, [, reload])



    const handleBasketButton = () => {


        if (currentBasket.find((dev) => dev.id == device.id && dev.color == currentColor)) {
            //already included 
            dispatch(handleBasket())
        }
        else {
            //on success

            let basketDevice: basketItem = { id: device.id, innerId: uuid(), color: currentColor }

            let result = currentBasket
            result.push(basketDevice)
            localStorage.setItem('basket', JSON.stringify(result))

            // setActive(currentBcket?.length > 0 ? currentBcket.find((el) => el == device.id): false)
            dispatch(makeRender())

            dispatch(pushDeviceInfo({ ...basketDevice, count: 1 }))


        }

        // setActive(true)
        //currentBcket?.length > 0 ? currentBcket.find((el : string | number) => el == device.id): false ?

        //changing contex to render bsket item in Navbar and update buttons style
        dispatch(makeRender())

    }

    function findSameBasketItem() {
        if (currentBasket.find((dev) => dev.id == device.id && dev.color == currentColor)) {
            return true
        }
        return false
    }

    console.log(currentBasket, 'BASKEt')


    return (

        <div className={c.info__panel}>
            <div className={c.info__panel__wrap}>

                {selected == 'All information' ?

                    <div className={c.color__block}>
                        <div className={c.cloror__container__text}>
                            <h3>Color:</h3> <p>{currentColor}</p>
                        </div>

                        <div className={c.colors__container}>
                            {device?.colors ?
                                device.colors.map((col) => <div key={col} onClick={() => { setCurrentColor(col) }} className={currentColor == col ? c['color__item__' + col + '__active'] : c['color__item__' + col]}></div>)
                                : null
                            }
                        </div>
                    </div>

                    :
                    <div className={c.devcie__intro}>
                        <div className={c.devcie__intro__content}>
                            <div className={c.img_intro_container}>
                                <img alt='device photo' src={device.images[device.colors[0]][0]}></img>
                            </div>
                            <div className={c.text__intro__container}>
                                {device.faceDescription}
                            </div>
                        </div>
                    </div>

                }
                <div className={c.order__price__block}>
                    {device.oldPrice && device.oldPrice > device.price ?
                        <>
                            <h3>{device.oldPrice}</h3>
                            <h2>{device.price}</h2>
                        </>
                        :
                        <h2 className={c.def__price}>{device.price}</h2>

                    }

                    <div className={c.order__buttons}>
                        <button>Buy</button>
                        <button onClick={handleBasketButton} className={findSameBasketItem() ? c.basket__button__active : c.basket__button}>
                            {findSameBasketItem() ? "In basket" : "Put in basket"}
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </button>
                    </div>
                </div>
                <div className={c.seller_wrap} >
                    <div className={c.seller_block}>
                        <p>Seller: </p><h4>{device.seller}</h4>
                    </div>
                </div>
            </div>

        </div>

    )
}
