import React, { useState, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
// import DiscountDevicesContent from './DiscountDevicesContent'
import c from '../styles/DevicesSlider.module.scss'


const DiscountDevicesContent = lazy(() => import('./DiscountDevicesContent'));

export default function DiscountDevices() {


    const [v, setV] = React.useState<boolean>(false)
    const [v2, setV2] = React.useState<boolean>(false)

    const { ref, inView } = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });


    React.useEffect(() => {
        if (!v && inView) {
            setTimeout(() => {
                setV2(true)
            },4000)
            console.log('XXXXXXXXXXXXX FFFF wad wadwa dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddd     dddddddddddddddddddddddddddddddddddddddddddddddddddd        wadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddFFFFFFF');
            setV(true)
        }
    }, [inView])

    return (
        <>
            <div ref={ref} ></div>

            <Suspense key={'sus'} fallback={<div>Loading...</div>}>
                {
                    v2 &&
                    <DiscountDevicesContent />
                }
            </Suspense>
        </>
    )
}

