import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

export default () => {
	// Create array with 1000 slides
	const slides = Array.from({ length: 4 }).map(
		(el, index) => ``
	);

	return (
		<Swiper modules={[Virtual]} spaceBetween={500} slidesPerView={1} virtual className='slider'>
			{slides.map(() => (
				<SwiperSlide>
					<div>

					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};