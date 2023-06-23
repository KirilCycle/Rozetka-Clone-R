import React, { MouseEventHandler } from 'react'
import c from './CloseBtn.module.scss'



export default function CloseBtn(   )  {
    return (
        <button  className={c.close_btn}>
            <span className="material-symbols-outlined" >
                close
            </span>
        </button>
    )
}
