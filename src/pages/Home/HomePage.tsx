import React from 'react'
import CategoryLeftBar from './components/CategoryLeftBar'
import Home from './components/Home'
import c from './styles/HomePage.module.scss'

export default function HomePage() {

  const [leftCategoryVisible, setLeftCategoryVisible] = React.useState<boolean>(false)

  //React.Dispatch<React.SetStateAction<string>
  console.log('WHOLE HOME PAGE RENDER');

  return (
    <div className={c.wrap}>
      <CategoryLeftBar handleCategory={setLeftCategoryVisible} visible={leftCategoryVisible} />
      <Home handleCategory={setLeftCategoryVisible} />
    </div>
  )
}
