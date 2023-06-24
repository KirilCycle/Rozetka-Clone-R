import React, { ReactNode } from 'react'
import c from './styles/MainButton.module.scss'

interface CSSClass {
  [key: string]: string;
}

interface BtnI {
    children: ReactNode
    className: string
    style: CSSClass
}

export default function MainButton({children, className, style}: BtnI) {
  return (
    <button className={`main-button`} style={style}>
        {children}
    </button>
  )
}







