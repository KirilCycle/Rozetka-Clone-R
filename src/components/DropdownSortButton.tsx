import React from 'react'
import { sortDevicestypes } from '../models/models'
import { setSortType } from '../store/features/Devices.Slice'
import { useAppDispatch } from '../store/hooks'
import c from '../styles/DropdownSortButton.module.scss'

export default function DropdownSortButton() {
   
   
    const [innerSortType, setInnerSortType] = React.useState<sortDevicestypes>('rating')

    const dispatch = useAppDispatch()

 
  
    function handleSortType(sortType: sortDevicestypes) {
      dispatch(setSortType(sortType))
      setInnerSortType(sortType)
    }
  

   
    return (
        <div className={c.dropdown}>

            <button className={c.dropbtn}>{`Sort by: ${innerSortType}`}
                <span className="material-symbols-outlined">
                    tune
                </span>
            </button>
            <div className={c.dropdown_content}>
                <a onClick={() => handleSortType('rating')} >sort by rating</a>
                <a onClick={() => handleSortType('expensive')} >from expensive to cheap</a>
                <a onClick={() => handleSortType('cheap')} >from cheap to expensive</a>
            </div>
        </div>
    )
}

