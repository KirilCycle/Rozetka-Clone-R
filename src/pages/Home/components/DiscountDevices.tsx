import React, { useState, lazy, Suspense, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import c from '../styles/DevicesSlider.module.scss';

const DiscountDevicesContent = lazy(() => import('./DiscountDevicesContent'));

export default function DiscountDevices() {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true

    });

    const [v, setV] = useState(false);
    const [isComponentLoaded, setComponentLoaded] = React.useState(false);

    useEffect(() => {
       if (inView) {
           setV(inView)
           alert('pizda')
           handleClick();
       }
    }, [inView]);

    useEffect(() => {
        console.log(v);
    }, [v]);


    const handleClick = () => {
        setComponentLoaded(true);
      };

    return (
        <>
            <div ref={ref} className={c.sus}>
                <p>{JSON.stringify(v)}</p>

                <Suspense fallback={<div>Loading...</div>}>
                    {isComponentLoaded && <DiscountDevicesContent />}
                </Suspense>

            </div>
        </>
    );
}