"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination'; // Import pagination styles
import { FreeMode, Thumbs, Navigation, Pagination } from 'swiper/modules';
import styles from "./HomeBanner.module.scss";
import { useState } from 'react';
import Image from 'next/image';

const HomeBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className={styles.homebanner}>
      {/* Main Swiper (Banner Slider) */}
      <div className={styles.banner_slider}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Thumbs, Pagination]}
          pagination={{
            clickable: true,
            el: `.${styles.customPagination}` // Attach pagination to the custom class in thumb_slider
          }}
          className={styles.mainSwiper}
        >
          <SwiperSlide>
            <Image src="/images/banner/banner0.jpg" fill alt="Banner Image 0" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/banner/banner1.jpg" fill alt="Banner Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/banner/banner2.jpg" fill alt="Banner Image 2" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Thumbnail Swiper with Pagination */}
      <div className={styles.thumb_slider}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={1}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.thumbSwiper}
          allowTouchMove={false}
        >
          <SwiperSlide>
            <Image src="/images/banner/banner0.jpg" fill alt="Thumb Image 0" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/banner/banner1.jpg" fill alt="Thumb Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/banner/banner2.jpg" fill alt="Thumb Image 2" />
          </SwiperSlide>

          {/* Pagination for the main Swiper */}
        </Swiper>
          <div className={styles.customPagination}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.thumb_text}>
            <p>Next</p>
          </div>
      </div>
    </section>
  );
};

export default HomeBanner;
