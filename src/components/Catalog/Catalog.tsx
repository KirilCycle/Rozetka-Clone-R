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

export default function Catalog({ v, setV }: CatalogProps) {


    const { types } = useAppSelector(state => state.typeReducer)
    const [loading, setLoading] = React.useState(true)

    const wrapRef = React.useRef<HTMLDivElement | null>(null)
    const modalRef = React.useRef<HTMLDivElement | null>(null)

    const dispatch = useAppDispatch()



    async function fetchAllTypes() {

        try {
            dispatch(fetchTypes())

        } catch (e) {

        }
    }

    function close() {
     
        let scssanimationtime = 400

        wrapRef.current!.style.opacity = '0'
        setTimeout(() => {
            setV(false)

        },scssanimationtime)
    }

    React.useEffect(() => {
        if (types.length < 1) {
            fetchAllTypes().then(res => setLoading(false))
        } else {
            setLoading(false)
        }
        setTimeout(() => {
            wrapRef.current!.style.opacity = '1'
        })
    }, [])



    return (
        <>

            <div ref={wrapRef} onClick={(e) => handleClickonParent(e, close)} className={c.wrap}>
                {loading ?
                    <Loader />
                    :
                    <div ref={modalRef} className={c.catalog}>
                        <button onClick={close} className={c.close_btn}>
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
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
            </div>
        </>
    )
}
