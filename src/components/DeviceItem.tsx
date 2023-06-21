import { render } from '@testing-library/react'
import React, { MutableRefObject, SyntheticEvent, useCallback, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { basketItem, DeviceI } from '../models/models'
import { makeRender } from '../store/features/BasketState.Slice'
import { handleBasket } from '../store/features/Basket.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { AppDispatch } from '../store/store'

import c from '../styles/DeviceItem.module.scss'
import { count } from 'console'
import { pushDeviceInfo } from '../store/features/BasketData'
import uuid from 'react-uuid'

interface DeviceItemProps {
    device: DeviceI,
    dispatch: AppDispatch
    handleBacketFn: Function
}

export default function DeviceItem({ device, dispatch, handleBacketFn }: DeviceItemProps) {



    let navigate = useNavigate()

    const { reload } = useAppSelector(state => state.basketStateSlice)

    let currentBcket = JSON.parse(localStorage.getItem('basket') as string)


    function findSameDeviceInBasket() {

        if (currentBcket.find((dev: basketItem) => dev.id == device.id && dev.color === device.colors[0])) {
            return true
        }

        return false
    }


    function handleDevicebacket() {

        let currentBcket = JSON.parse(localStorage.getItem('basket') as string)



        if (!Array.isArray(currentBcket)) {

            let stertArray = []
            stertArray.push(device.id)
            localStorage.setItem('basket', JSON.stringify(stertArray))

        }
        if (Array.isArray(currentBcket)) {

            if (findSameDeviceInBasket()) {
                //already included 
                dispatch(handleBasket())
            }
            else {
                //on success

                let basketDevice: basketItem =  { id: device.id,  innerId: uuid(), color: device.colors[0] }

                    let result = currentBcket

                result.push(basketDevice)
                localStorage.setItem('basket', JSON.stringify(result))

                // setActive(currentBcket?.length > 0 ? currentBcket.find((el) => el == device.id): false)
                dispatch(makeRender())
                dispatch(pushDeviceInfo({...basketDevice, count: 1 }))


            }

        }

        // setActive(true)
        //currentBcket?.length > 0 ? currentBcket.find((el : string | number) => el == device.id): false ?

        dispatch(makeRender())

    }

    const [isHovered, setIsHovered] = React.useState(false)

    return (
        <div className={isHovered ? c.device_item_hovered : c.device_item}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {device.oldPrice > device.price ?
                <div className={c.discount_alert}>
                    DISCOUNT
                </div>
                :
                null
            }
            <div className={c.image_container} onClick={() => { navigate(`/${device.type}/${device.id}`) }}>
                <img alt={device.faceDescription} src={isHovered ? device.images[device.colors[0]][1] : device.images[device.colors[0]][0]} />
            </div>

            <div className={c.device_item_info_block}>
                <ul className={c.ul_colors_list} >
                    {device?.colors ?
                        device.colors.map((col) => <li key={col} className={c['color__item__' + col]}></li>)
                        : null
                    }
                </ul>
                <div className={c.device__text__block}>
                    <p className={c.name_header}>
                       <Link to={`/${device.type}/${device.id}`} >
                        {device.faceDescription?.length > 50 ? device.faceDescription.slice(0, 50) + '...' : device?.faceDescription}
                       </Link>
                       
                    </p>
                </div>


                <div className={c.deivce__item__button__block}>
                    <div className={c.price_block}>
                        {
                            device.oldPrice > device.price ?

                                <>
                                    <h4>{device.oldPrice}</h4>
                                    <h2 className={c.discount_font}>
                                        {device.price}
                                    </h2>
                                </>
                                :
                                <h2>
                                    {device.price}
                                </h2>
                        }
                    </div>
                    {
                        findSameDeviceInBasket() ?

                            <div className={c.basket_included}>
                                <span onClick={handleDevicebacket} className="material-symbols-outlined">
                                    shopping_cart_checkout
                                </span>
                            </div>
                            :
                            <span onClick={handleDevicebacket} className="material-symbols-outlined">
                                shopping_cart
                            </span>

                    }
                </div>
            </div>
            {isHovered ?
                <div className={c.more_info}>
                    <p>
                        {device.description.slice(0, 250)}
                    </p>
                </div>
                :
                null

            }
        </div>
    )
}

