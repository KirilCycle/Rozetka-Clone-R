// import axios from 'axios'
import React from 'react'
import { useInView } from 'react-intersection-observer'
// import { SERVER_URL } from '../../../consts'
// import { DeviceI } from '../../../models/models'
// import { fetchSuggestion, fetchSuggestionNext } from '../../../store/features/Suggestions.SLice'
// import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import c from '../styles/SuggestionDevices.module.scss'
// import ViewedeDeviceItem from './DeviceFromSlider'
// import Loader from '../../../components/Loader'
import { useState, lazy, Suspense, useEffect } from 'react';


export default function SuggestionDevices() {
  const SuggestionDevicesContent = lazy(() => import('./SuggestionDevicesContent'));


  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true

});

const [v, setV] = useState(false);
const [isComponentLoaded, setComponentLoaded] = React.useState(false);

useEffect(() => {
   if (inView) {
       setV(inView)
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
            <div className={c.lazy_wrap} ref={ref} >
                <Suspense fallback={<div>Loading...</div>}>
                    {isComponentLoaded && <SuggestionDevicesContent/>}
                </Suspense>
            </div>
    </>
  )

}
