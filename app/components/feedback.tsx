"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper"; // ✅ Type import
const feedbacks = [
  {
    name: "Brown Gracia",
    role: "Full Stack Developer at CreoShift ",
    message:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”",
    image: "/images/gracia.png",
  },
  {
    name: "Mayssa Faraj",
    role: "UI Designer at Alpander",
    message:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”",
    image: "/images/mayssa.jpg",
  },
  {
    name: "Gabriella Saade",
    role: "Data Analyst at Dimension Studio",
    message:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”",
    image: "/images/christelle.jpg",
  },
];
export default function Feedback() {
  const textSwiperRef = useRef<SwiperType | null>(null);
  const imageSwiperRef = useRef<SwiperType | null>(null);

  const syncSwipers = (swiper: SwiperType) => {
    if (
      imageSwiperRef.current &&
      swiper.realIndex !== imageSwiperRef.current.realIndex
    ) {
      imageSwiperRef.current.slideToLoop(swiper.realIndex);
    }
    if (
      textSwiperRef.current &&
      swiper.realIndex !== textSwiperRef.current.realIndex
    ) {
      textSwiperRef.current.slideToLoop(swiper.realIndex);
    }
  };

  return (
    <section id="contact" className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 pb-40 grid grid-cols-1 md:grid-cols-5 gap-0 items-center">
        <div className="md:col-span-2 order-1 mt-8 md:mt-22 md:order-2">
          <div className="hidden md:block">
            <Swiper
              modules={[Navigation]}
              navigation={false}
              spaceBetween={30}
              slidesPerView={1}
              loop
              onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
              onSlideChange={(swiper) => syncSwipers(swiper)}
            >
              {feedbacks.map((feedback, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-[350px] h-[300px] md:w-full md:h-[400px] rounded-lg object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="md:col-span-3 order-2 md:order-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            People’s Feedback about JobNow!
          </h2>
          <p className="text-gray-500 mb-6 md:mb-12 max-w-xl mx-auto md:mx-0 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop
            onSwiper={(swiper) => (textSwiperRef.current = swiper)}
            onSlideChange={(swiper) => syncSwipers(swiper)}
          >
            {feedbacks.map((feedback, index) => (
              <SwiperSlide key={index}>
                <blockquote className="text-base md:text-lg text-[#000000] mb-4 md:mb-8 max-w-xl mx-auto md:mx-0">
                  {feedback.message}
                </blockquote>

                <div className="block md:hidden my-4">
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-[260px] h-[220px] rounded-lg object-cover mx-auto"
                  />
                </div>

                <p className="font-semibold text-lg md:text-2xl mb-1">
                  {feedback.name}
                </p>
                <p className="text-gray-500 text-sm mb-4 md:mb-6">
                  {feedback.role}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center md:justify-start gap-4 md:gap-6">
            <button className="prev-btn w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full transition-colors duration-300 hover:bg-[#00cc99] hover:text-white cursor-pointer">
              <FaArrowLeft />
            </button>
            <button className="next-btn w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full transition-colors duration-300 hover:bg-[#00cc99] hover:text-white cursor-pointer">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
