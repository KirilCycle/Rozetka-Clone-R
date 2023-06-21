import React, { useContext } from 'react'
import { SelectedSubPageContext } from '../../../context'
import { setDefaultPositions } from '../../../store/features/Chat.Slice'
import { useAppDispatch } from '../../../store/hooks'
import c from '../styles/DevicePage.module.scss'

export default React.memo(function SubPagesVariatyList() {

    console.log('sub page list render ')

    const dispatch= useAppDispatch()

    const {setCurSubPages , selected } = useContext(SelectedSubPageContext)

    function handleChageQuestions() {
        setCurSubPages('Questions')
        dispatch(setDefaultPositions())
    }

    return (
        <div className={c.subpages_list_container}>
            <ul className={c.subpages_variaty_list}>
                <li className={selected == 'All information' ? c.li_active : ''} onClick={() => setCurSubPages('All information')}>All information</li>
                <li className={selected == 'characteristics' ? c.li_active : ''} onClick={() => setCurSubPages('characteristics')}>characteristics</li>
                <li className={selected == 'Questions' ? c.li_active : ''} onClick={handleChageQuestions} >Questions</li>
            </ul>
        </div>
    )
})
