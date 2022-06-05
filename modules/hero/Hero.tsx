import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, EffectCoverflow} from 'swiper'

const Hero = () => {
  return (
    <section className='hero_section'>
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='image_container'>
            <Image
              src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='Image 1'
              layout='fill'
              objectFit='cover'
              priority={true}
            />
            <div className='content_wrapper'>
              <div className='content'>
                <h1>We design your Home</h1>
                <h1>On Priority</h1>
                <button className='btn_brand'>Call US</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='image_container'>
            <Image
              src='https://images.pexels.com/photos/7027791/pexels-photo-7027791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='Image 2'
              layout='fill'
              objectFit='cover'
            />
            <div className='content_wrapper'>
              <div className='content'>
                <h1>We design your Home</h1>
                <h1>On Priority</h1>
                <button className='btn_brand'>Call US</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='image_container'>
            <Image
              src='https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='Image 2'
              layout='fill'
              objectFit='cover'
            />
            <div className='content_wrapper'>
              <div className='content'>
                <h1>We design your Home</h1>
                <h1>On Priority</h1>
                <button className='btn_brand'>Call US</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero
