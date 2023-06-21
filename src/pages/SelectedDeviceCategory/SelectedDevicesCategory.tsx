import React from 'react'
import SortDevicesBar from './components/SortDevicesBar'
import CategoryHeader from './components/CategoryHeader'
import  c from './styles/SelectedDevicePage.module.scss'
import ComponentsCategory from './components/ComponentsCategory'

export default function SelectedCategoryPage() {

    return (
        <div className={c.selected_category_wrap}>
            <CategoryHeader />
            <SortDevicesBar  />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentsCategory />
            </div>
        </div>
    )
}
