// @ts-nocheck
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { CountContext } from '../../../context';
import { addToTotalSum, } from '../../../store/features/Basket.Slice';
import { setCurrentCountAtDevicesInfo } from '../../../store/features/BasketData';
import { setCurrentCountAtDevices } from '../../../store/features/BasketDevices';
import { useAppDispatch } from '../../../store/hooks';

interface CountInputProps {
    defaultVal: number
    changeValueState: Dispatch<SetStateAction<number>>
    devicePrice: number,
    innerId: string
    color: string
}

export default function CountInput({ defaultVal, changeValueState, devicePrice, innerId, color }: CountInputProps) {

    const inputRef = React.useRef<HTMLInputElement | any>(null);

    const { setInnerNum, innerNum } = React.useContext(CountContext)

    const dispatch = useAppDispatch()


    useEffect(() => {

        inputRef.current.defaultValue = defaultVal

    }, [])
    if (inputRef.current) {
        inputRef.current.defaultValue = defaultVal
    }


    function handlePriceIput(numberFromInput: string) {

        let number = Number(numberFromInput)

        if (number > 0 && number < 100) {


            setInnerNum(Number(number))

            setInnerNum(number)

            let totalSumFromDeleteDevice = devicePrice * defaultVal

            dispatch(addToTotalSum(-totalSumFromDeleteDevice))

            changeValueState(number)

            dispatch(addToTotalSum(number * devicePrice))

            console.log(totalSumFromDeleteDevice, 'AAAAA')


            dispatch(setCurrentCountAtDevicesInfo({ count: number, innerId, }))
            dispatch(setCurrentCountAtDevices({ count: number, innerId, color }))
        }

    }

    function handleBackSpace(key: string) {

        if (key === "Backspace") {
            setInnerNum('')
        }

    }

    return (
        <input onKeyDown={(e) => handleBackSpace(e.key)} value={innerNum} onChange={(e) => { handlePriceIput(e.target.value) }} ref={inputRef}></input>
    )
}
