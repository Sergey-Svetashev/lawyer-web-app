import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";

export const Showcase = ({ urls }: { urls: Array<string> }) => (
  <div className="showcase">
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1170: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {urls.map((url, index) => (
        <SwiperSlide key={`${url}_${index}`}>
          <img
            className={index === 0 ? "no-shadow" : ""}
            src={url}
            alt="award"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
