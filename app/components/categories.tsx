"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  FaBrain,
  FaChartLine,
  FaUniversity,
  FaProjectDiagram,
  FaTools,
  FaFlask,
} from "react-icons/fa";

const categories = [
  { icon: <FaBrain />, title: ["Design and", "Development"], jobs: "380" },
  { icon: <FaChartLine />, title: ["Accounting and", "Finance"], jobs: "350" },
  { icon: <FaUniversity />, title: ["Bank", "Institution"], jobs: "350" },
  { icon: <FaProjectDiagram />, title: ["Product", "Management"], jobs: "350" },
  { icon: <FaTools />, title: ["Engineering and", "Software"], jobs: "300" },
  { icon: <FaFlask />, title: ["Research and", "Science"], jobs: "290" },
];

export default function Categories() {
  return (
    <section id="about" className="py-20 bg-[#eef9f6]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Popular Job Categories
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          So many jobs are currently open for some of you who are hungry for
          opportunites "not food of course we aren't a restaurant after all" so
          these are the most popular job categories.
        </p>

        <Swiper
          spaceBetween={16}
          slidesPerView={2.1}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4.3 },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="group p-6 bg-white rounded-2xl shadow-sm text-left transition duration-300 hover:bg-[#00cc99] hover:text-white cursor-pointer flex flex-col justify-between h-full min-h-[250px]">
                <div className="text-5xl text-[#00D5AE] group-hover:text-white mb-6">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 leading-snug">
                    {cat.title.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < cat.title.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  <p className="text-xs text-[#8a8a8a] group-hover:text-white mt-4">
                    {cat.jobs} Job Vacancy
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="mt-10 border border-[#00cc99] bg-[#eef9f6] text-[#00D5AE] hover:bg-[#00cc99] hover:text-white transition px-6 py-2 rounded-md text-sm font-medium cursor-pointer">
          View More
        </button>
      </div>
    </section>
  );
}
