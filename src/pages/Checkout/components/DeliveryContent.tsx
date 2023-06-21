import React from 'react'
import AvailabelPickPoinstContent from './AvailabelPickPoinstContent'
import CurierForm from './CurierForm'
import c from '../styles/DeliveryContent.module.scss'

export default function DeliveryContent() {

    const [currentSubContent, setCurrentSubContent] = React.useState<number>(0)

    return (
        <div className={c.delivery}>

            <h2 className={c.del_header}>Delivery way</h2>

            <button className={c.deliveries__city}>

                <span className="material-symbols-outlined">
                    share_location
                </span>

                <div className={c.city_info}>
                    <p>Your city </p>
                    <h2>{'City nameeee'}</h2>
                </div>
                <div className={c.chevron_right_wrap}>
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </div>
            </button>

            <div className={c.deliveries_variety_btns}>


                <label className={c.radio_container}>
                    <p>
                        Pickup from Dady Raffic Drug chain
                    </p>
                    <input onClick={() => setCurrentSubContent(1)} type="radio" name="radio" />
                    <span className={c.radio_checkmark}></span>
                </label>
                {currentSubContent === 1 ?
                    <AvailabelPickPoinstContent pointChain={'daddyraficpoints'} />
                    :
                    null
                }
                <label className={c.radio_container}>
                    <p>
                        Pickup from Nova Poshta
                    </p>
                    <input onClick={() => setCurrentSubContent(2)} type="radio" name="radio" />
                    <span className={c.radio_checkmark}></span>
                </label>
                {currentSubContent === 2 ?
                    <AvailabelPickPoinstContent pointChain={'novaposhtapoints'} />
                    :
                    null
                }
                <label className={c.radio_container}>
                    <p>
                        Courier from Nova Poshta
                    </p>
                    <input onClick={() => setCurrentSubContent(3)} type="radio" name="radio" />
                    <span className={c.radio_checkmark}></span>
                </label>
                    {currentSubContent === 3 ?
                        <CurierForm />
                        :
                        null
                    }

            </div>

        </div>

    )
}
