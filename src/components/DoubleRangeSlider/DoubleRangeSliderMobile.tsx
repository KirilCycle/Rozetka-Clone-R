// @ts-nocheck
import c from './styles/DoubleRangeSlider.module.scss'
import React, { useRef, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { setMaxRangePrice, setMinRangePrice } from '../../store/features/PriceRange'



interface DoubleRangeSliderProps {
    maxSum: number
    startSum: number
    endSum: number
}


export default React.memo(function DoubleRangeSlider({ maxSum, startSum, endSum }: DoubleRangeSliderProps) {



    const [currentMaxSum, setCurrentMaxSum] = useState(0)
    const [currentMinSum, setCurrentMinSum] = useState(0)


    const sliderRef = useRef<HTMLDivElement>(null)
    const secondSliderRef = useRef<HTMLDivElement>(null)
    const conatinerRef = useRef<HTMLDivElement>(null)
    const rangeLineFild = useRef<HTMLDivElement>(null)

    const isClicked = useRef<boolean>(false)
    const secondIsClicked = useRef<boolean>(false)

    const cords = useRef({ startX: maxSum, lastX: maxSum })
    const secondCords = useRef({ startX: maxSum, lastX: maxSum })


  


    React.useEffect(() => {


        if (!sliderRef.current || !conatinerRef.current || !secondSliderRef.current) return;

        const staticRangePxWidth = 170

        const slider = sliderRef.current
        const secondSlider = secondSliderRef.current

        const container = conatinerRef.current

        setCurrentMinSum(startSum)
        setCurrentMaxSum(endSum)


        let defaultSumProcentFromMinSum = Math.ceil(startSum * 100 / maxSum)

        let takePxbyProcentsMinSum = staticRangePxWidth * defaultSumProcentFromMinSum / 100



        slider.style.left = takePxbyProcentsMinSum + 'px'

        rangeLineFild.current.style.paddingLeft = defaultSumProcentFromMinSum + '%'



        let defaultSumProcentFromMaxSum = Math.ceil(endSum * 100 / maxSum)

        let takePxbyProcentsMaxSum = staticRangePxWidth * defaultSumProcentFromMaxSum / 100

        secondSlider.style.left = takePxbyProcentsMaxSum + 'px'



        rangeLineFild.current.style.paddingRight = 100 - defaultSumProcentFromMaxSum + '%'


        const onMouseMove = (event: MouseEvent) => {


            if (!isClicked.current || !isClicked.current) return;



            const nextX = Math.floor(event.touches[0].clientX) - cords.current.startX + cords.current.lastX

            let procents = Math.ceil(nextX * 100 / staticRangePxWidth)

            const PriceRange = maxSum * procents / 100

            if (PriceRange > maxSum || PriceRange < 0 || !minInputRef.current || (staticRangePxWidth * Math.ceil(PriceRange * 100 / maxSum) / 100) + 5 > secondCords.current.lastX) {

            }
            else {

                setCurrentMinSum(PriceRange)

                minInputRef.current.value = PriceRange

                slider.style.left = nextX + 'px'

                rangeLineFild.current.style.paddingLeft = nextX + 'px'
            }

        }


        const onSecondMouseMove = (event: MouseEvent) => {

            if (!secondIsClicked.current || secondIsClicked.current == false) return;

            const nextX = Math.floor(event.touches[0].clientX) - secondCords.current.startX + secondCords.current.lastX

            let procents = Math.ceil(nextX * 100 / staticRangePxWidth)

            const PriceRange = maxSum * procents / 100

            if (PriceRange > maxSum || PriceRange < 0 || !maxInputRef.current || ((staticRangePxWidth * Math.ceil(PriceRange * 100 / maxSum)) / 100) - 5 < cords.current.lastX) {
                //dont allow slider gets out of range
            }
            else {

                setCurrentMaxSum(PriceRange)

                maxInputRef.current.value = PriceRange

                secondSlider.style.left = nextX + 'px'


                rangeLineFild.current.style.paddingRight = (staticRangePxWidth - nextX) + 'px'
            }

        }



        const onMouseDown = (event: MouseEvent) => {
            cords.current.startX = event.touches[0].clientX
            isClicked.current = true

        }

        const onSecondMouseDown = (event: MouseEvent) => {
            secondCords.current.startX = event.touches[0].clientX
            secondIsClicked.current = true

        }

        const onMouseUp = (event: MouseEvent) => {
            cords.current.lastX = slider.offsetLeft;
            isClicked.current = false


        }
        const onSecondMouseUp = (event: MouseEvent) => {
            secondCords.current.lastX = secondSlider.offsetLeft;
            secondIsClicked.current = false

        }

        const MouseLeave = (event: MouseEvent) => {
            cords.current.lastX = slider.offsetLeft;
            isClicked.current = false

        }



        onSecondMouseUp()
        onMouseUp()

        //'touchmove'
        //touchstart
        //
        //Math.floor(event.touches[0].clientX)
        //

        //onMouseDown               ==== touchStart
        //onSecondMouseDown         ==== secondTouchstart
        //onMouseUp                 ==== onTouchend
        //onSecondMouseDown         ==== secondTouchStart
        //onMouseMove               ==== onTouchmove
        //onSecondMouseMove         ==== onSecondTouchMove
        //MouseLeave                ==== TouchCancel



        slider.addEventListener('touchstart', onMouseDown)
        secondSlider.addEventListener('touchstart', onSecondMouseDown)

        container.addEventListener('touchend', onMouseUp)
        container.addEventListener('touchmove', onMouseMove)
        container.addEventListener('touchcancel', MouseLeave)

        container.addEventListener('touchend', onSecondMouseUp)
        container.addEventListener('touchmove', onSecondMouseMove)
        container.addEventListener('touchcancel', onSecondMouseMove)





        const cleanUp = () => {

            // slider.removeEventListener('mouseup', onMouseUp)
            // slider.removeEventListener('mousedown', onMouseDown)
            // container.removeEventListener('mousemove', onMouseMove)
            // container.removeEventListener('mouseleave', onMouseMove)




        }

        return cleanUp

    }, [])

    const maxInputRef = React.useRef(null)
    const minInputRef = React.useRef(null)

    const dispatch = useAppDispatch()

   

    function handleStroePrice() {
        dispatch(setMaxRangePrice(currentMaxSum))
        dispatch(setMinRangePrice(currentMinSum))
        
    }


    return (
        <>
            {secondSliderRef.current && sliderRef.current ?
                <div className={c.price__handle}>
                    <h2>
                        Price
                    </h2>
                    <div className={c.input__container}>
                        <input onChange={(e) => { setCurrentMinSum(e.target.value) }} ref={minInputRef} defaultValue={currentMinSum}></input>
                        <input onChange={(e) => { setCurrentMaxSum(e.target.value) }} ref={maxInputRef} defaultValue={currentMaxSum}></input>
                        <button onClick={handleStroePrice} >OK</button>
                    </div>

                </div>
                :
                null
            }
            <div ref={conatinerRef} className={c.container}>

                <div className={c.range__container}>
                    <div ref={rangeLineFild} className={c.range__line}>
                        <div className={c.range__fild}></div>
                    </div>
                    <button ref={sliderRef} className={c.slider}></button>

                    <button ref={secondSliderRef} className={c.second__slider}></button>
                </div>

            </div>



        </>
    )
});
