import React from 'react'
import LeftMobileFilter from '../../components/LeftMobileFilter'
import SearchHeader from './components/SearchHeader'
import SearchPageDevicesPanel from './components/SearchPageDevicesPanel'
import SerachPageFilter from './components/SerachPageFilter'
import { MobileSortActive } from '../../context'
import c from './styles/SearchPage.module.scss'


export default function SearchPage() {

  let searchQuerry = window.location.pathname.replaceAll('/', '').replace('search', '')

  const [active, setActive] = React.useState(false)

  function handleMenuState() {
    setActive(active => !active)
  }
  
 
  

  return (

    <div className={c.main_wrap}>

      {/* <button onClick={makeRerender} >SUSUSUSUSUS</button> */}

      <MobileSortActive.Provider value={{ active, handleMenuState }} >


        <LeftMobileFilter />
      
        <SearchHeader />

        <div className={c.wrap}>
          <div className={c.filter_content}>
            <SerachPageFilter />
          </div>
          <SearchPageDevicesPanel  />
        </div>



      </MobileSortActive.Provider>
    </div>

  )
}
