import axios, { Axios, AxiosError } from 'axios'
import React from 'react'
import { fetchDevice } from '../../../API/fetchDevice'
import { DeviceI, DeviceId } from '../../../models/models'
import { pushBasketDevices } from '../../../store/features/BasketDevices'
import { useAppDispatch } from '../../../store/hooks'
import SmallDeviceItem from './SmallDeviceItem'

interface DeviceItemFromBacketProps {
    id: string | number
    innerId: string
    color: string
}

export function DeviceItemFromBasket({ id, innerId, color }: DeviceItemFromBacketProps) {

    const [loading, setLoading] = React.useState<boolean>(true)
    const [device, setDevice] = React.useState<DeviceI | null>(null)
    const [error, setError] = React.useState<string | null>(null)

    const includedRef = React.useRef<boolean>(null)

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        setLoading(true)

        
        fetchDevice(id).then((res) => {

            const fetchedDevice = res as DeviceI

            if (fetchedDevice.faceDescription && fetchedDevice.colors) {
                setDevice(res as DeviceI)
              
                //HERE MY PROBLEM 
                dispatch( pushBasketDevices({...fetchedDevice, innerId, color, count: 1}) )
                
            } else {
                setError('Error')
            }

            setLoading(false)
        }


        ).catch(err => setError(err))

    }, [])

    return (
        <>
            {loading ?
                <h2>Loading</h2>
                :
                <>
                    {error ?
                        <p>{error}</p>
                        :
                        <SmallDeviceItem color={color} currentInnerID={innerId} device={device as DeviceI} />

                    }
                </>
            }
        </>
    )
}