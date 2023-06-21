import React from 'react'
import { Types } from '../models/models'
import c from '../styles/Menu.module.scss'
interface MenuCategoryContentComponentsProps {
    active: boolean,
    error: string | null
    loading: boolean
    types: Types[]
}

export default function MenuCategoryContentComponents({ active,error, loading,types }: MenuCategoryContentComponentsProps) {
    return (
        <div className={c.category__content__active}>
            {error && !loading ?
                <p>{error ? error : loading}</p>
                :
                <ul className={c.category_list_container}>
                    {types.map((tp: Types) => <li key={tp.fullTypeName}>{tp.fullTypeName}</li>)}
                </ul>
            }
        </div>
    )
}
