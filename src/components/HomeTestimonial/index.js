"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./HomeTestimonial.module.scss"
import TestimonialCard from './TestimonialCard';

const HomeTestimonial = () => {
    return (
        <section className={styles.hometestimonial}>
            <div className="container">
                <h2 className={styles.title}>Words from
                our satisfied clients</h2>
                <div className={styles.hometestimonial_slider}>
                    <Swiper
                      modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        loop={true}
                        slidesPerView={2}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default HomeTestimonial