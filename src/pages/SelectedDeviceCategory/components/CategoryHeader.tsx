import axios, { AxiosError } from 'axios'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Types } from '../../../models/models'
import { useAppSelector } from '../../../store/hooks'
import c from '../styles/CategoryHeader.module.scss'




export default function CategoryHeader() {

   console.log( 'CATEGORY HEADRE RENDR');


   const location = useLocation()
   const takeCurrentType  = location.pathname.replaceAll('/', '')

   console.log(takeCurrentType, 'HEADER REFRESH');

    const [categoryObject, setCategoryObject] = React.useState<Types | null>(null)
    const [error, setError] = React.useState<string | null>(null)
    const { selectedBrands } = useAppSelector((state) => state.brandReducer)


    async function fetchInfoAboutCurrentCategory() {

        try {
            const response = await axios.get<Types[]>(`http://localhost:3001/types?type=${takeCurrentType}`)
            setCategoryObject(response.data[0] as Types)
        }
        catch (e) {
            const err = e as AxiosError
            setError(err.message)
        }
    }

    React.useEffect(() => {
        fetchInfoAboutCurrentCategory()
    }, [takeCurrentType])

    return (
        <div className={c.category}>
            {selectedBrands?.length == 1 ?
                //in case where we select only one brand in type phone for example me fill change it to //Mobile Phone => Mobile Phone { Applle as selected brand }
                <h2>{error ? error : categoryObject?.fullTypeName + ' ' + selectedBrands[0]}</h2>
                :
                <h2>{error ? error : categoryObject?.fullTypeName}</h2>
            }
        </div>
    )
}
