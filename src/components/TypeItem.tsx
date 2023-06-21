import React from 'react'

interface TypeItem {
    type: string
}

export default function TypeItem({ type }: TypeItem) {
    return (
        <div className='wda'>{type}</div>
    )
}
