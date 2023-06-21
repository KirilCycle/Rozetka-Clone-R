
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ModifiedDeviceItem } from '../../../store/features/BasketDevices'
import c from '../styles/CheckoutListDeviceItem.module.scss'

interface CheckoutListDeviceItemProps {
    device: ModifiedDeviceItem
}

export default function CheckoutListDeviceItem({ device }: CheckoutListDeviceItemProps) {

    let navigate = useNavigate()
    

    return (
        <>
            {
                <div className={c.item}>

                    <div onClick={() => { navigate(`/${device.type}/${device.id}`) }} className={c.face_dev_ifno}>
                        <span className={c.image_container}>
                            <img src={device.images[device.color][0]}></img>
                        </span>
                        <h2>{device?.faceDescription}</h2>
                    </div>

                    <div className={c.body}>
                        <div className={c.number}>
                            <h3>number</h3>
                            <p>{device.count ? device.count : '1'}</p>
                        </div>
                        <div className={c.price}>
                            <h3>price</h3>
                            {device.oldPrice > device.price ?
                                <>
                                    <p className={c.old_prc}>{device?.oldPrice}</p>
                                    <p className={c.discount_price}>{device.price}</p>
                                </>
                                :
                                <p>{device.price}</p>

                            }
                        </div>
                        <div className={c.sum}>
                            <h3>sum</h3>
                            {device.count ?
                                <p>{device?.price * device.count}</p>
                                :
                                <p>{device.price * 1}</p>
                            }

                        </div>
                    </div>
                </div>
            }
        </>
    )

}
