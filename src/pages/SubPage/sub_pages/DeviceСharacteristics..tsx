import React from 'react'
import { Characteristic } from '../../../models/models'
import c from '../styles/DeviceSubPages.module.scss'
import CharacteristicItem from '../components/CharacteristicItem'



interface DeviceCharacteristicsProps {
    deviceCharacteristics: Characteristic[]
}

export default function DeviceCharacteristicsSubPage({ deviceCharacteristics }: DeviceCharacteristicsProps) {
    return (
        <div className={c.characteristics__container}>
            {
                deviceCharacteristics.map((char) => 
                 <CharacteristicItem key={char.header} char={char}/>
                )
            }
        </div>
    )
}
