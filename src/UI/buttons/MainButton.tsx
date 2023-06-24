import React, { MouseEventHandler, ReactNode } from 'react'
import c from './styles/MainButton.module.scss'

export interface CSSClass {
  [key: string]: string;
}

interface BtnI {
    children: ReactNode
    style: CSSClass
    onClick?: Function 
}

export default function MainButton({children, style, onClick}: BtnI) {
  return (
    <button onClick={onClick as MouseEventHandler } className={c.main_button} style={style}>
        {children}
    </button>
  )
}







