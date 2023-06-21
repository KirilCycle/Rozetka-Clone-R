import axios from 'axios'
import React from 'react'
import Loader from '../../../components/Loader'
import { SERVER_URL } from '../../../consts'
import c from '../styles/AvailabelPickPoinstContent.module.scss'

interface PointInterface {
    number: number
    street: string
}

interface AvailabelPickPoinstContent {
    pointChain: 'daddyraficpoints' | 'novaposhtapoints'
}


export default function AvailabelPickPoinstContent({ pointChain }: AvailabelPickPoinstContent) {

    const [value, setValue] = React.useState<string>('')
    const [poinst, setPoints] = React.useState<PointInterface[]>()
    const [loading, setLoadig] = React.useState<boolean>(true)
    const [error, setError] = React.useState<string | null>(null)
    const [selectedPoint, setSelectedPoint] = React.useState<PointInterface | null>(null)
    const [visible, setVisible] = React.useState<boolean>(false)

    function handleSelect(p: PointInterface) {
        setSelectedPoint(p)
        setVisible(false)
        setValue(p.street + " #" + p.number)
    }


    async function fetchPoints() {
        try {

            setLoadig(true)

            const res = await axios.get<PointInterface[]>(`${SERVER_URL}${pointChain}?_limit=4&q=${value}`)

            setPoints(res.data as PointInterface[])

            console.log(res.data);

            setLoadig(false)

        } catch (e) {
            setError('error')
        }

    }

    React.useEffect(() => {
        fetchPoints()
    }, [value])

    return (
        <div className={c.wrap}>
            <button onClick={() => setVisible(true)}> {
                selectedPoint ?
                    selectedPoint.street + " #" + selectedPoint.number
                    :
                    'Select point'

            }  </button>
            {visible ?

                <div className={c.search_content}>
                    <input className={c.search_input} placeholder='enter pickup point' value={value} onChange={(e) => setValue(e.target.value)} type="text">
                    </input>
                    <ul className={c.points_list} >
                        {loading ?
                            <Loader />
                            :
                            <>
                                {error ?
                                    <p>
                                        {error}
                                    </p>
                                    :
                                    null
                                }
                                {
                                    (poinst as PointInterface[]).map((point) =>
                                        <li key={point.street + point.number} onClick={() => handleSelect(point)} >
                                            {point.street + '  #' + point.number}
                                        </li>
                                    )
                                }
                            </>

                        }
                    </ul>
                </div>
                :
                null

            }
        </div>
    )


}
