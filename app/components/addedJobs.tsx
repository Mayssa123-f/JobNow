"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaAngleRight, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

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
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
          >
            {addedJobs.map((job, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-between bg-white rounded-xl text-left w-full md:w-[450px] p-3 py-6">
                  <img
                    src={job.image}
                    alt={`${job.company} logo`}
                    className="w-20 h-20 rounded-full mb-6 object-contain"
                  />
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-3">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-9">
                        {job.company}
                      </p>
                      <p className="text-sm text-gray-600 mb-8">
                        {job.description}
                      </p>
                    </div>
                    <div>
                      <div className="flex gap-3 mb-6">
                        <span className="flex items-center gap-2 bg-gray-200 px-2.5 py-1 md:px-5 md:py-2.5 rounded text-sm text-black">
                          <FaMapMarkerAlt className="text-sm" /> {job.location}
                        </span>
                        <span className="flex items-center gap-2 bg-gray-200 px-2.5 py-1 md:px-5 md:py-2.5 rounded text-sm text-black">
                          <FaBriefcase className="text-sm" /> {job.type}
                        </span>
                      </div>
                      <a
                        href="/apply"
                        className="text-[#00cc99] text-left text-lg font-bold mt-1 cursor-pointer hover:text-[#00bfa0] transition flex items-center gap-1"
                      >
                        Apply Now <FaAngleRight />
                      </a>
                    </div>
                  </div>
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
