import React, { useRef } from 'react'
import { handleBasket } from '../../../store/features/Basket.Slice'
import { fetchProducts, setCurrentPage, setNextPage } from '../../../store/features/Devices.Slice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import c from '../styles/SearchPage.module.scss'
import { getPages } from '../../../utils/pagination'
import DeviceItem from '../../../components/DeviceItem'
import Loader from '../../../components/Loader'
import PaginationControll from '../../../components/PaginationControll'

type searchQuery = string

interface SearchPageDevicesPanelProps {
    query: searchQuery
}


export default function SearchPageDevicesPanel({ query }: SearchPageDevicesPanelProps) {

    const { selectedBrands } = useAppSelector((state) => state.brandReducer)
    const { error, loading, devices,tottalItems, currentSortType, currentPage, limit } = useAppSelector((state) => state.productReducer)
    const { maxPrice, minPrice, defaultMaxPrice, defaultminPrice } = useAppSelector((state) => state.rangeReducer)
   
    const [pagesArray, setPagesArray] = React.useState<number[]>([])

    const dispatch = useAppDispatch()


    
    React.useEffect(() => {
        if (Array.isArray( devices) ){
            setPagesArray(getPages(limit, devices.length))
        }
    }, [loading])
    
    


    React.useEffect(() => {

        //as i dont want make price verify on default params 
        if (maxPrice !== defaultMaxPrice || defaultminPrice > 0) {
            switch (currentSortType) {
                case 'rating':
                    dispatch(fetchProducts({ q: query, price_gte: minPrice, price_lte: maxPrice, _sort: 'rating', _order: 'desc', brand: selectedBrands }))
                    break;
                case 'expensive':
                    dispatch(fetchProducts({ q: query, price_gte: minPrice, price_lte: maxPrice, _sort: 'price', _order: 'desc', brand: selectedBrands }))
                    break;
                case 'cheap':
                    dispatch(fetchProducts({ q: query, price_gte: minPrice, price_lte: maxPrice, _sort: 'price', brand: selectedBrands }))
                    break;
                default:
                    dispatch(fetchProducts({ q: query, price_gte: minPrice, price_lte: maxPrice, brand: selectedBrands }))
            }

            return;
        }


        switch (currentSortType) {
            case 'rating':
                dispatch(fetchProducts({ q: query, brand: selectedBrands, _sort: 'rating', _order: 'desc', }))
                break;
            case 'expensive':
                dispatch(fetchProducts({ q: query, brand: selectedBrands, _sort: 'price', _order: 'desc', }))
                break;
            case 'cheap':
                dispatch(fetchProducts({ q: query, brand: selectedBrands, _sort: 'price', }))
                break;
            default:
                dispatch(fetchProducts({ q: query, brand: selectedBrands, }))

        }

    }, [currentSortType, currentPage, limit, maxPrice, minPrice, selectedBrands])


    return (
        <div className={c.serach_page_content}>
            {loading ?
                <div className={c.loader_container}>
                    <Loader />
                </div>
                :
                <>
                    {error ?
                        <h1>{error as string}</h1>
                        :
                        <div className={c.devices__list__container}>
                            {devices?.map((dev) => <DeviceItem handleBacketFn={handleBasket} key={dev.id} dispatch={dispatch} device={dev} />)}
                        </div>
                    }
                </>
            }
        </div>
    )
}
