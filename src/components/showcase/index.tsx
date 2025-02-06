import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
        <SwiperSlide>
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
