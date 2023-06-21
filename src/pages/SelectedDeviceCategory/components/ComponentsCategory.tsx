import React from 'react'
import DevicePanel from '../../../components/DevicesPanel'
import LeftFilter from '../../../components/LeftFilter'
import c from '../styles/DevicesComponents.module.scss'


export default function ComponentsCategory() {

  console.log('ComponentsCategory render')

  return (
    <div className={c.wrap}>
        <LeftFilter />
        <DevicePanel />
    </div>
  )
}
