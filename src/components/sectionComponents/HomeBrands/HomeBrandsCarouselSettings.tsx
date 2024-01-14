import { CarouselProps } from "antd";

export const settings: CarouselProps = {
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  swipe:  true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 1,
      },
    },
  ],
};