import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/seo2.png";
import profilePic2 from "../../img/web.jpg";
import profilePic3 from "../../img/w.png";
import profilePic4 from "../../img/ten.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "From 2010, I started my first outsourcing in SEO and worked in this field from 2010 to 2018",
    },
    {
      img: profilePic2,
      review:
        "In 2018, I started learning web development and now I work in it",
    },
    {
      img: profilePic3,
      review:
        "From 2019 to 2022, I built WordPress websites and earned from them.",
    },
    {
      img: profilePic4,
      review:
        "From 2021 to 2022, I started a remote job at a company named 'TenTwenty'",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Some </span>
        <span>Other </span>
        <span>Information</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
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
