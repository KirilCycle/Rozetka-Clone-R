import React from 'react'
import c from '../styles/DeviceSubPages.module.scss'

import { Characteristic } from '../../../models/models'

interface CharacteristicItemProps {
    char: Characteristic
}

export default function CharacteristicItem({char}:CharacteristicItemProps) {
  return (
    <div className={c.char}>
        <h2>{char.header}</h2>
        <p>{char.body}</p>
    </div>
  )
}
