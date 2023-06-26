import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { SERVER_URL } from '../../consts'
import { MenuContext } from '../../context'
import { Types } from '../../models/models'
import { fetchTypes } from '../../store/features/Types.Slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import c from './styles/Catalog.module.scss'
import Loader from '../Loader'
import { handleClickonParent } from '../../utils/handleClickonParent'

interface CatalogProps {
    v: boolean
    setV: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Catalog() {

    const { types } = useAppSelector(state => state.typeReducer)
    const [loading, setLoading] = React.useState(true)

    const dispatch = useAppDispatch()

    async function fetchAllTypes() {

        try {
            dispatch(fetchTypes())
            setLoading(false)
        } catch (e) {

        }
    }

    React.useEffect(() => {
        if (types.length < 1) {
            fetchAllTypes().then(res => setLoading(false))
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <>


            {loading ?
                <Loader />
                :
                <div className={c.catalog}>
                    <ul className={c.types_list} >
                        {types.map((t: Types) =>
                            <li key={t.type} >
                                <div className={c.image_container}>
                                    <img src={t.image} ></img>
                                </div>
                                <button>
                                    <Link onClick={() => { }} to={t.type}>
                                        {t.fullTypeName}
                                    </Link>

                                </button>
                            </li>
                        )}
                    </ul>
                </div>

            }

        </>
    )
}
