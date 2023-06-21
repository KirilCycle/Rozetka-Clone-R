import React from 'react'
import c from '../styles/SortDevicesBar.module.css'
import { MobileSortActive  } from '../../../context'
import DropdownLimitButton from '../../../components/DropdownLimitButton'
import DropdownSortButton from '../../../components/DropdownSortButton'




function SortDevicesBar() {

  const { handleMenuState } = React.useContext(MobileSortActive)

  console.log('SORT DEVICE BAR');

  return (

    <div className={c.container}>
      <button className={c.filter__button} onClick={handleMenuState}>
        filter
        <span className="material-symbols-outlined">
          filter_alt
        </span>
      </button>
      <DropdownLimitButton />
      <DropdownSortButton />
    </div>

  )
}

export default React.memo( SortDevicesBar )