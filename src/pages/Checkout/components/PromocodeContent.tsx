import React from 'react'
import c from '../styles/PromocodeContent.module.scss'

export default function PromocodeContent() {

    const [visible, setVisible] = React.useState(false)
    const [value, setValue] = React.useState<string>('')

    return (
        <div className={c.promo_code_banner}>
            <div className={c.text_container}>
                <p>Promocode</p>
                {visible ?
                    <button onClick={() => setVisible(false)} >Close</button>
                    :
                    <button onClick={() => setVisible(true)} >Add</button>
                }
            </div>

            {visible ?
                <div className={c.promocode_content}>
                    <input value={value} onChange={ (e) => { setValue(e.target.value) } } type="text" />
                    <button>Use </button>
                </div>
                :
                null
            }
        </div>
    )
}
