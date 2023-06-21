import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import c from '../styles/HomePage.module.scss'
import Loader from '../../../components/Loader'
import TypesComponent from './TypesComponent'
import { fetchTypes } from '../../../store/features/Types.Slice'
import { Types } from '../../../models/models'
import InformationAboutCompanyList from '../../../components/InformationAboutCompanyList'
import { handleClickonParent } from '../../../utils/handleClickonParent'

interface CategoryLeftBar {
  visible: boolean
  handleCategory: React.Dispatch<React.SetStateAction<boolean>>
}



export default function CategoryLeftBar({ visible, handleCategory }: CategoryLeftBar) {

  const { types, loading, error } = useAppSelector(state => state.typeReducer)


  const dispatch = useAppDispatch()

  //fetching types
  React.useEffect(() => {
    if (types.length < 1) {
      dispatch(fetchTypes())
    }
  }, [])

  console.log('CategoryLeftBar RENDER !!!!', types)



  return (
    <>
      <div className={c.category_block}>
        <div className={c.category}>

          {loading ?
            <Loader />
            :
            <>
              {error ?
                <p>{error}</p>
                :
                <TypesComponent typesArray={(types as Types[])} />

              }
            </>
          }
        </div>
        <div>
        </div>
        <InformationAboutCompanyList />
      </div>


      {/* mobile left category bar */}

      {

        <div onClick={(e) => handleClickonParent(e, () => { handleCategory(false) } ) }  className={visible ? c.category_mobile_active : c.category_mobile}>

          <div className={c.category}>

            <div className={c.category_top_header}>
              <h2>Categories</h2>
              <button onClick={() => { handleCategory(prev => !prev) }} className={c.close_btn}>
                <div>
                  <span className="material-symbols-outlined">
                    close
                  </span>
                </div>
              </button>

            </div>

            <div className={c.categories_list_wrap}>
              {loading ?
                <Loader />
                :
                <>
                  {error ?
                    <p>{error}</p>
                    :
                    <TypesComponent typesArray={(types as Types[])} />

                  }
                </>
              }
            </div>

          </div>

        </div>


      }

    </>


  )
}
