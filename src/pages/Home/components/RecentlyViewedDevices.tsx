import React , { useState, lazy, Suspense, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import c from '../styles/RecentlyViewed.module.scss';

const RecentlyViewedDevicesContent = lazy(() => import('./RecentlyViewedDevicesContent'));

export default function RecentlyViewedDevices() {
  
    const { ref, inView } = useInView({
        threshold: 0.6,
        triggerOnce: true

    });

    const [isComponentLoaded, setComponentLoaded] = useState(false);

    useEffect(() => {
       if (inView) {
           setComponentLoaded(true);
       }
    }, [inView]);

  
    return (
        <>
        <div ref={ref} className={c.recent_wrap}>
            <Suspense fallback={<div>Loading...</div>}>
                {isComponentLoaded && <RecentlyViewedDevicesContent/>}
            </Suspense>
        </div>
    </>
  )
}
