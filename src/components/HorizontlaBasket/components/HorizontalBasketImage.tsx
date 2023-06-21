
import React from "react"
import { ModifiedDeviceItem } from "../../../store/features/BasketDevices"
import c from '../styles/HorizontalBasket.module.scss'

interface HorizontalBasketImageContainerProps {
    device: ModifiedDeviceItem
}
export default function HorizontalBasketImageContainer({ device }: HorizontalBasketImageContainerProps) {
    
    const [loading, setLoading] = React.useState<boolean>(false)
    
    return (
        <>
            {loading ?
                <h2>Loading</h2>
                :
                    <img alt={device.faceDescription} src={device?  device.images[device.color][0] : 'Device not found'} ></img>
            }
        </>
    )
}

