import React from 'react'
import c from '../styles/SearchPage.module.scss'
import DropdownSortButton from '../../../components/DropdownSortButton'
import { useAppSelector } from '../../../store/hooks'


interface SearchHeaderProps {
  searchQuerry: string
}

export default function SearchHeader() {


  const { query } = useAppSelector(state => state.searchReducer)
  
  const searchQuerry =  window.location.pathname.replaceAll('/', '').replace('search', '')

  return (
    <div className={c.header}>
      <h1>{`"${searchQuerry}"`}</h1>
      <DropdownSortButton />
    </div>
  )
}
