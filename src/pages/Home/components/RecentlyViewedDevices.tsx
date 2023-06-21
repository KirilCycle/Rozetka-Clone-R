import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import c from '../styles/DevicesSlider.module.scss'
import ViewedeDeviceItem from "./DeviceFromSlider";
import { DeviceI, DeviceId } from "../../../models/models";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchDevice } from "../../../API/fetchDevice";
import { pushViewedDevice } from "../../../store/features/ViewedDevices.Slice";
import Loader from "../../../components/Loader";
import { useInView } from "react-intersection-observer";


export default function RecentlyViewedDevices() {


  const [devicesId, setDevicesId] = React.useState<DeviceId[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const { viewedDevices } = useAppSelector(state => state.viewedReducer)
  const [wasObserver, setWasObserver] = React.useState<boolean>(false)

  const { ref, inView } = useInView({
    threshold: 0.9
  })

  console.log('VIEWED DEVICES RENDER');
    
  const dispatch = useAppDispatch()

  React.useEffect(() => {

    if (inView) {
      console.log('SECOND FECTH')
      const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') as string)
      setDevicesId(recentlyViewed)

      setLoading(true)

      if (recentlyViewed.length > 0) {
        for (let i = 0; i < recentlyViewed.length; i++) {

          fetchDevice(recentlyViewed[i]).then(res => {

            console.log('VIEWED DEVICES FECTH')
            let device: DeviceI = res as DeviceI

            if (device.images && device.id && device.colors && device.price) {

              dispatch(pushViewedDevice(device))
            }

          })

          if (i == recentlyViewed.length - 1) {
            setLoading(false)
          }
        }

      } else {
        setLoading(false)
      }

      setWasObserver(true)
    }

  }, [inView])

  return (
    <div className={c.wrap}>
      {wasObserver ?
        null
        :
        <div className={c.devices_observer} ref={ref} >OBSERVERD</div>
      }
      <h1>Recently viewed</h1>
      {loading ?
        <Loader />
        :
        <>
          {devicesId.length > 0 ?

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
                  {viewedDevices.map((dev) =>
                    <SwiperSlide key={dev.id} ><ViewedeDeviceItem deviceI={dev} /></SwiperSlide>
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
                  {viewedDevices.map((dev) =>
                    <SwiperSlide key={dev.id} ><ViewedeDeviceItem deviceI={dev} /></SwiperSlide>
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
                  {viewedDevices.map((dev) =>
                    <SwiperSlide key={dev.id} ><ViewedeDeviceItem deviceI={dev} /></SwiperSlide>
                  )}

                </Swiper>
              </div>



            </div>

            :
            <div className={c.empty_message_wrap}>
              <img src="https://t4.ftcdn.net/jpg/01/68/01/87/360_F_168018748_qmW17F6anXnw8ah9odplfSBQfXXyD9cu.jpg"></img>
              <h2>you havnt viewed anything</h2>
            </div>
          }
        </>


      }

    </div>
  )
}
