import React, { InputHTMLAttributes } from 'react'
import c from './styles/MainInput.module.scss'


export default function MainInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={c.inpt} {...props}  />
  )
}
