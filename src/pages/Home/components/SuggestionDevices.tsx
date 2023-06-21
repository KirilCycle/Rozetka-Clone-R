import axios from 'axios'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { SERVER_URL } from '../../../consts'
import { DeviceI } from '../../../models/models'
import { fetchSuggestion, fetchSuggestionNext } from '../../../store/features/Suggestions.SLice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import c from '../styles/SuggestionDevices.module.scss'
import ViewedeDeviceItem from './DeviceFromSlider'
import Loader from '../../../components/Loader'

export default function SuggestionDevices() {

  const [count, setCount] = React.useState<number>(2)
  const { suggestionDevices, loading } = useAppSelector(state => state.suggetsionsReducer)
  const [wasObserver, setWasObserver] = React.useState<boolean>(false)

  const { ref, inView } = useInView({
    threshold: 1
  })

  const dispatch = useAppDispatch()

  console.log('SUGGESTION DEVICE RENDER');

  React.useEffect(() => {

    if (inView) {

      dispatch(fetchSuggestion())
      setWasObserver(true)
    }

  }, [inView])

  function fetchNextPart() {

    dispatch(fetchSuggestionNext(count))
    setCount(prev => prev + 1)

  }

  return (
    <>
      {wasObserver ?
        null
        :
        <div className={c.devices_observer} ref={ref} >OBSERVER</div>
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

      }
    </>
  )

}
