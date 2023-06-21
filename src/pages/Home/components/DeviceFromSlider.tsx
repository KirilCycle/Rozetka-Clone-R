import { useNavigate } from 'react-router-dom'
import { DeviceI, } from '../../../models/models'
import c from '../styles/DeviceFromSlider.module.scss'

interface ViewedeDeviceItem {
    deviceI: DeviceI
}


export default function IntroDeviceItem({ deviceI }: ViewedeDeviceItem) {

    let navigate = useNavigate()

    function handleRedirect() {
        navigate(`/${deviceI.type}/${deviceI.id}`)
    }

    return (
        <div className={c.cart}>
            <div onClick={handleRedirect} className={c.image_container}>
                <img alt={`photo ${deviceI?.faceDescription}`} src={deviceI.images[deviceI.colors[0]][0]} />
            </div>
            <div className={c.text_wrap}>
                <p>
                    {deviceI?.faceDescription.slice(0,45)}
                </p>
            </div>
            <div className={c.price_block}>
                {
                    deviceI.oldPrice > deviceI.price ?

                        <>
                            <h4>{deviceI.oldPrice}</h4>
                            <h2 className={c.discount_font}>
                                {deviceI.price}
                            </h2>
                        </>
                        :
                        <h2>
                            {deviceI.price}
                        </h2>
                }
            </div>
        </div>
    )
}
