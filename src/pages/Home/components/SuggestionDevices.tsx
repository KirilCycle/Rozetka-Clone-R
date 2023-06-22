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
    threshold: 1,
    triggerOnce: true

});

const [v, setV] = useState(false);
const [isComponentLoaded, setComponentLoaded] = React.useState(false);

useEffect(() => {
   if (inView) {
       setV(inView)
       alert('pizdaTEST')
       handleClick();
   }
}, [inView]);

useEffect(() => {
    console.log(v);
}, [v]);


const handleClick = () => {
    setComponentLoaded(true);
  };

  // const [count, setCount] = React.useState<number>(2)
  // const { suggestionDevices, loading } = useAppSelector(state => state.suggetsionsReducer)
  // const [wasObserver, setWasObserver] = React.useState<boolean>(false)

 

  // const dispatch = useAppDispatch()

  // console.log('SUGGESTION DEVICE RENDER');

  // React.useEffect(() => {

   

  //     dispatch(fetchSuggestion())
  //     setWasObserver(true)
    

  // }, [])

  // function fetchNextPart() {

  //   dispatch(fetchSuggestionNext(count))
  //   setCount(prev => prev + 1)

  // }

  return (
    <>
      
            <div className={c.lazy_wrap} ref={ref} >
                <Suspense fallback={<div>Loading...</div>}>
                    {isComponentLoaded && <SuggestionDevicesContent/>}
                </Suspense>
            </div>
     

      {/* {wasObserver ?
        null
        :
        <div className={c.devices_observer}  >OBSERVER</div>
      }
      {wasObserver ?

        <div className={c.wrap}>

          <div className={c.header_contaier}>
            <h1>Suggestion</h1>
            <span className="material-symbols-outlined">
              local_fire_department
            </span>
          </div>

          {loading ?
            <Loader />
            :
            <div className={c.content}>
              {suggestionDevices.map((dev, index) =>
                <div key={dev.id} className={c.deviceItem_wrap}>
                  <label className={c.small_banner}>TOP</label>
                  <ViewedeDeviceItem deviceI={dev} />

                  {
                    (index + 1) == suggestionDevices.length ?
                      <button className={c.fethc_btn} onClick={fetchNextPart}>
                        show more
                      </button>
                      :
                      null
                  }

                </div>
              )}

            </div>

          }

        </div>
        :
        null

      } */}
    </>
  )

}
