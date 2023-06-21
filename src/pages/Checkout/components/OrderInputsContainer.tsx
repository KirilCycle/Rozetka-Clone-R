import React from 'react'
import c from '../styles/OrderInputsContainer.module.scss'

export default function OrderInputsContainer() {


    interface InputsData {
        first: string
        last: string
        phone: number
    }

    const [inputData, setInputData] = React.useState<InputsData>({ first: '', last: '', phone: 0 })

    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        const value = evt.target.value;
       
     
        setInputData({
            ...inputData,
            [evt.target.name]: value
        });

        

    }

    return (
        <div className={c.form_content}>
            <h1>Placing an order</h1>

            <h2>Your contacts data</h2>

            <div className={c.form_data}>

                <div className={c.input_container}>
                    <p>first name</p>
                    <input onChange={(e) => handleChange(e)} name='first' className={c.firts_name} type="text" />
                </div>

                <div className={c.input_container}>
                    <p>last name</p>
                    <input onChange={(e) => handleChange(e)} name='last' className={c.last_name} type="text" />
                </div>

            </div>
            <div className={c.input_container_mobile}>
                <p>modile phone</p>
                <input onChange={(e) => handleChange(e)} name='phone' defaultValue={'+38'} type="number" />
            </div>
        </div>
    )
}
