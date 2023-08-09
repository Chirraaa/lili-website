import React from 'react';
import { Navigation, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';


const data = [
  { cover: require('@site/static/images/homepage-carousel/1.png').default, title: 'Preview 1' },
  { cover: require('@site/static/images/homepage-carousel/2.png').default, title: 'Preview 2' },
  { cover: require('@site/static/images/homepage-carousel/3.png').default, title: 'Preview 3' },
];


export default () => {
  const slides = data.map((item, index) => (
    <SwiperSlide key={index}>
      <img src={item.cover} alt={item.title} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, EffectCoverflow, Autoplay]}
      slidesPerView={1}
      navigation
      loop
      simulateTouch
      centeredSlides
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: false,
      }}
    >
      {slides}
    </Swiper>
  );
};
