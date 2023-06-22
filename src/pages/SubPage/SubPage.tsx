import React from 'react'
import DeviceQuestionsSubPage from './sub_pages/DeviceQuestionsSubPage'
import DeviceSliderSubPage from './sub_pages/DeviceSliderSubPage'
import DeviceCharacteristicsSubPage from './sub_pages/DeviceСharacteristics.'
import { SelectedSubPageContext } from '../../context'

import { DeviceI, urlImg } from '../../models/models'

export type SelectedSubPageType = 'All information' | 'Questions' | 'characteristics'

interface SubPageProps {
    currentImgs: urlImg[]
    device: DeviceI

}

export default function SubPages({ currentImgs, device }: SubPageProps) {

    const { selected } = React.useContext(SelectedSubPageContext)

    console.log('sub page rendered')



    switch (selected) {
        case 'characteristics':
            return (
                <DeviceCharacteristicsSubPage deviceCharacteristics={device.characteristics} />
            )
         
        case 'Questions':
            return (
                <DeviceQuestionsSubPage questionsId={device.questionsId} />
            )
            
        case 'All information':
            return (
                <DeviceSliderSubPage description={device.description} src={currentImgs} />
            )
            
        default:
            return (
                <DeviceSliderSubPage description={device.description} src={currentImgs} />
            )

    }
   

}
