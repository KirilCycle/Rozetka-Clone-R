import React from 'react'
import { firstColorIndex } from '../../../consts'
import { SelectedSubPageContext } from '../../../context'
import { DeviceI } from '../../../models/models'
import SubPages from '../../SubPage/SubPage'
import { SelectedSubPageType } from '../../SubPage/SubPage'
import c from '../styles/DevicePage.module.scss'
import DeviceInfoPanel from './DeviceInfoPanel'
import SubPagesVariatyList from './SubPagesVariatyList'




interface DevicePageContent {
    device: DeviceI
}


export default function DevicePageContent({ device }: DevicePageContent) {


    const [currentSubPage, setCurSubPages] = React.useState<SelectedSubPageType>('All information')
    const [currentColor, setCurrentColor] = React.useState(device?.colors[firstColorIndex])

    const currentImgs = device?.images[currentColor]

  


    return (
        <>
            <SelectedSubPageContext.Provider value={{ selected: currentSubPage, setCurSubPages, currentColor, setCurrentColor }}>
                <SubPagesVariatyList />
                <div className={c.wrap}>
                    <SubPages currentImgs={currentImgs} device={device} />
                    <DeviceInfoPanel device={device} />
                </div>

            </SelectedSubPageContext.Provider>
        </>
    )
}
