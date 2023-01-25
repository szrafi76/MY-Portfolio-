import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/tahmid.png";
import profilePic2 from "../../img/sayed.png";
import profilePic3 from "../../img/kanak.png";
import profilePic4 from "../../img/tanvir.PNG";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Our honarable CTO Sir Tahmid Alam",
    },
    {
      img: profilePic2,
      review:
        "Our honarable Senior Manager Md.Shahidur Rahman Sir",
    },
    {
      img: profilePic3,
      review:
        "Our honarable Manager & my supervisor Kazi Md. Golam Kibria sir",
    },
    {
      img: profilePic4,
      review:
        "Our honarable mentor Tanvir Alam Sir",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Our </span>
        <span>Development </span>
        <span>Team</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
