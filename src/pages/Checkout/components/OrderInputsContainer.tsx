import React from 'react'
import c from '../styles/OrderInputsContainer.module.scss'
import MainInput from '../../../UI/inputs/MainInput'

export default function OrderInputsContainer() {


    interface InputsData {
        first: string
        last: string
        phone: number
    }

    const [inputData, setInputData] = React.useState<InputsData>({ first: '', last: '', phone: 0 })

    const inputPatternStyle = {
        width: '100%',
        height: '45px',
        marginTop: '20px',
        borderRadius: '5px',
    }

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
                    <MainInput onChange={(e) => handleChange(e)} name='first' style={inputPatternStyle} type="text"></MainInput>

                </div>

                <div className={c.input_container}>
                    <p>last name</p>
                    <MainInput onChange={(e) => handleChange(e)} style={inputPatternStyle}  name='last' type="text" />
                </div>

            </div>
            <div className={c.input_container_mobile}>
                <p>modile phone</p>
                <MainInput onChange={(e) => handleChange(e)} style={inputPatternStyle}  name='phone' defaultValue={'+38'} type="number" />
            </div>
        </div>
    )
}
