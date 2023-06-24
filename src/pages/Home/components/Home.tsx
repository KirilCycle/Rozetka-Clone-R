import React from 'react'
import c from '../styles/HomePage.module.scss'
import BannerSlider from './BannerSlider'
import HorizontalBasket from '../../../components/HorizontlaBasket/HorizontalBasket'
import HomeContent from './HomeContent'
import { createPortal } from 'react-dom'
import MainButton from '../../../UI/buttons/MainButton'

interface HandleCategoryProps {
  handleCategory: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Home({ handleCategory }: HandleCategoryProps) {

  console.log('HOME CONTENT RENDER (AS ALL RIGHT )');

  const categoryBtnCss = {
    width: '100%',
    padding: '10px 20px 10px 20px',
    height: 'auto',
    borderRadius: '10px',
    marginTop: '10px',
    display: 'flex',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    fontSize: '1.1rem',
    color: 'rgb(255, 255, 255)',
    justifyContent: 'space-between',
    fontWeight: '550',
  }

  return (
    <div className={c.home_container}>

      <HorizontalBasket />

      <div className={c.banner_wrap}>
        <BannerSlider />
      </div>

      <div className={c.category_btn_wrap}>
        <MainButton onClick={() => { handleCategory(prev => !prev) }} style={categoryBtnCss}>
          Show categories
          <span className="material-symbols-outlined">
            category
          </span>
        </MainButton>
      </div>

      <HomeContent />
    </div >
  )
}
