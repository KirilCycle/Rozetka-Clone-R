import React from 'react'
import c from '../styles/SearchPage.module.scss'
import DropdownSortButton from '../../../components/DropdownSortButton'


interface SearchHeaderProps {
  searchQuerry: string
}

export default function SearchHeader({ searchQuerry }: SearchHeaderProps) {

  return (
    <div className={c.header}>
      <h1>{`"${searchQuerry}"`}</h1>
      <DropdownSortButton />
    </div>
  )
}
