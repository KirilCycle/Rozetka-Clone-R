import React, { MouseEventHandler, ReactNode } from 'react'
import c from './styles/ContentBtn.module.scss'
import { CSSClass } from './MainButton'



interface ContentBtnP {
  children?: ReactNode
  style?: CSSClass 
  onClick?: Function
}

export default function ContentBtn({children, style, onClick}: ContentBtnP) {
  return (
    <button onClick={onClick as MouseEventHandler<HTMLButtonElement>} style={style} className={c.btn} >{children}</button>
  )
}



