import React from 'react'
import { setLimit } from '../store/features/Devices.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/DropdownLimitButton.module.scss'

export default function DropdownLimitButton() {
   
    const dispatch = useAppDispatch()

    const { limit } = useAppSelector(state => state.productReducer)
   
    return (
        <div className={c.dropdown_limit}>
            <button className={c.dropbtn_limit}>{`Show by: ${limit}`}</button>
            <div className={c.dropdown_content_limit}>
                <a onClick={() => dispatch(setLimit(5))} >5</a>
                <a onClick={() => dispatch(setLimit(10))} >10</a>
                <a onClick={() => dispatch(setLimit(20))} >20</a>
                <a onClick={() => dispatch(setLimit(30))} >30</a>
            </div>
        </div>
    )
}
