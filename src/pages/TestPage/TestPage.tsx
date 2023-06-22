import React from 'react'
import c from './styles.module.scss'

export default function TestPage() {

  const [v, setV] = React.useState<Boolean>(false)




  return (
    <div className={c.header}>
      {v ?
        <div  data-testid="toggle-el">ALERT SUS HELP</div>
         : 
        null
      }
      <button data-testid="toggle-btn" className={c.btn} onClick={() => setV(v => !v)}>INVOKE NYCLEAR BATON</button>
    </div>
  )
}



