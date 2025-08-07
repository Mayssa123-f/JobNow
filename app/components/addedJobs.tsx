"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  FaLaptopCode,
  FaChartBar,
  FaUniversity,
  FaCog,
  FaFlask,
  FaProjectDiagram,
} from "react-icons/fa";

const addedJobs = [
  {
    image: "/images/uiux.png",
    title: "UI/UX Designer",
    company: "Dimension Studio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "San Francisco, CA",
    type: "Full Time",
  },
  {
    image: "/images/full.png ",
    title: "Full Stack Developer",
    company: "Alpander",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "San Francisco, CA",
    type: "Full Time",
  },
  {
    image: "/images/project.png",
    title: "Product Designer",
    company: "XReact Tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "San Francisco, CA",
    type: "Full Time",
  },
  {
    image: "/images/cyber.png ",
    title: "DevOps Engineer",
    company: "CreoShift",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "Zahle,Lebanon ",
    type: "Full Time",
  },
];

export default function RecentlyAddedJobs() {
  return (
    <section className="py-20 bg-[#fbfbfb]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Recently Added Jobs
        </h2>
        <p className="text-[#8a8a8a] max-w-xl mx-auto mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="px-[15px]">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.8,
                spaceBetween: 24,
              },
            }}
          >
            {addedJobs.map((job, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-between bg-white rounded-xl text-left w-[85vw] max-w-[450px] h-[400px] md:h-[450px] p-4">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-12 h-12 mb-1 object-contain"
                  />
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-[#8a8a8a] mb-1">{job.company}</p>
                  <p className="text-sm text-[#929292] mb-1">
                    {job.description}
                  </p>
                  <div className="flex gap-3 mb-2">
                    <span className="flex items-center gap-2 bg-[#f9f9f9] px-2.5 py-1 rounded text-sm text-black">
                      <img
                        src="/images/loc.png"
                        alt="Location"
                        className="w-4 h-4"
                      />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-2 bg-[#f9f9f9] px-2.5 py-1 rounded text-sm text-black">
                      <img
                        src="/images/time.png"
                        alt="Job Type"
                        className="w-4 h-4"
                      />
                      {job.type}
                    </span>
                  </div>
                  <button className="text-[#00cc99] text-left text-sm font-bold mt-1">
                    Apply Now &gt;
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className="mt-10 border border-[#00cc99] bg-white text-[#00D5AE] hover:bg-[#00cc99] hover:text-white transition px-6 py-2 rounded-md text-sm font-medium cursor-pointer">
          View More
        </button>
      </div>
    </section>
  );
}
