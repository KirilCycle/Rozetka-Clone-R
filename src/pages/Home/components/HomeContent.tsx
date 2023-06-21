import React from 'react'
import { useInView } from 'react-intersection-observer'
import DiscountDevices from './DiscountDevices'
import RecentlyViewedDevices from './RecentlyViewedDevices'
import SuggestionDevices from './SuggestionDevices'

export default function HomeContent() {

  // const [slidersVisible, setSlidersVisible] = React.useState<number>(1)
  // const [btnVisible, setBtnVisible] = React.useState(true)

  // const { ref, inView } = useInView({
  //   threshold: 0.9
  // })

  // //i use observer as i dont want fetch extra elements which customer even wont see  
  // React.useEffect(() => {

  //   if (slidersVisible > 2) {

  //     setBtnVisible(false)

  //   } else {
  //     if (inView) {
  //       setSlidersVisible(prev => prev + 1)
  //     }
  //   }


  // }, [inView])

  return (
    <>
      <DiscountDevices />
      <RecentlyViewedDevices />
      <SuggestionDevices />

      {/* {
        btnVisible ?
          <div ref={ref}></div>
          :
          null
      } */}
    </>
  )
}
