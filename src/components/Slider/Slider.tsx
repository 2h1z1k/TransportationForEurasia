import { Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Slider.scss'
import 'swiper/css'
import 'swiper/css/virtual'
import { Toolbar } from '@mui/material'

export default () => {
    const slides = Array.from({ length: 4 }).map((el, index) => ``)

    return (
        <Swiper
            modules={[Virtual]}
            spaceBetween={500}
            slidesPerView={1}
            virtual
            className="slider"
        >
            {slides.map(() => (
                <SwiperSlide>
                    <div>
                        <Toolbar>
							
						</Toolbar>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
