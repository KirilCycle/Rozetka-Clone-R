import React from 'react'
import { urlImg } from '../../../models/models'
import DeviceSlider from '../../../components/DevicSlider'
import c from '../styles/DeviceSubPages.module.scss'


interface DeviceSliderSubPageProps {
  src: urlImg[]
  description: string
}

export default function DeviceSliderSubPage({ src, description }: DeviceSliderSubPageProps) {

  return (

    <div className={c.device__slider}>

      <DeviceSlider src={src} />


      <div className={c.device__slider__description} >
        <p>{description}</p>
      </div>

    </div>


  )
}
