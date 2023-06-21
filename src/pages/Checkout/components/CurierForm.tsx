import React from 'react'
import c from '../styles/CurierForm.module.scss'

export default function CurierForm() {
    return (
        <div className={c.currier_form}>
                <input className={c.main} placeholder='Enter street name' type="text"></input>
                <input className={c.second} placeholder='Building' type="text"></input>
                <input className={c.second} placeholder='Flat' type="number"></input>
        </div>
    )
}
