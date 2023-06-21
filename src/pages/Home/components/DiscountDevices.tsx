import React from 'react'
import IntroDeviceItem from './DeviceFromSlider'
import c from '../styles/DevicesSlider.module.scss'
import axios from 'axios'
import { SERVER_URL } from '../../../consts'
import { DeviceI } from '../../../models/models'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";



export default function DiscountDevices() {

    const [devices, setDevices] = React.useState<DeviceI[] | []>([])
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string | null>(null)

    
    async function fethcDesDevices() {

        try {
            const response = await axios.get(`${SERVER_URL}topdiscountdevices?`)
            return setDevices(await response.data)

        } catch (e) {
            setError('Error')
        }

    }

    React.useEffect(() => {
        fethcDesDevices().then(res => setLoading(false))
    }, [])

    return (
        <div className={c.wrap}>

            <h1>Hot Discounts</h1>
            {loading ?
                <h1>Loading</h1>
                :
                <>

                    {error ?
                        <h2>{error}</h2>
                        :
                        <div className={c.slider_container}>

                            <div className={c.fourtneen_slider}>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    freeMode={false}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]}
                                    className="mySwiper"
                                >
                                    {devices.map((dev) =>
                                        <SwiperSlide key={dev.id} >
                                              <label className={c.discount_label}>DISCOUNT%</label>
                                             <IntroDeviceItem deviceI={dev} />
                                        </SwiperSlide>
                                    )}

                                </Swiper>
                            </div>
                            <div className={c.treeple_slider}>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={0}
                                    freeMode={false}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]}
                                    className="mySwiper"
                                >
                                    {devices.map((dev) =>
                                        <SwiperSlide key={dev.id} ><IntroDeviceItem deviceI={dev} /></SwiperSlide>
                                    )}


                                </Swiper>
                            </div>
                            <div className={c.double_slider}>
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={0}
                                    freeMode={false}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]}
                                    className="mySwiper"
                                >
                                    {devices.map((dev) =>
                                        <SwiperSlide key={dev.id} ><IntroDeviceItem deviceI={dev} /></SwiperSlide>
                                    )}

                                </Swiper>
                            </div>



                        </div>

                    }
                </>

            }

        </div>
    )
}
