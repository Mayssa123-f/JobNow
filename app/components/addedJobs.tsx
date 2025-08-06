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
    icon: <FaLaptopCode />,
    title: "Frontend Developer",
    company: "TechSpark Ltd.",
    description: "Build and maintain user-friendly web interfaces.",
    location: "Remote",
    type: "Full Time",
  },
  {
    icon: <FaChartBar />,
    title: "Data Analyst",
    company: "Insight Corp",
    description: "Analyze datasets to uncover insights.",
    location: "New York",
    type: "Part Time",
  },
  {
    icon: <FaUniversity />,
    title: "Education Consultant",
    company: "FutureEd",
    description: "Advise students on academic paths.",
    location: "London",
    type: "Full Time",
  },
  {
    icon: <FaCog />,
    title: "DevOps Engineer",
    company: "CloudSync",
    description: "Maintain and deploy cloud infrastructure.",
    location: "Berlin",
    type: "Full Time",
  },
  {
    icon: <FaFlask />,
    title: "Lab Researcher",
    company: "BioGen Labs",
    description: "Conduct experimental trials and research.",
    location: "Amsterdam",
    type: "Part Time",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Project Manager",
    company: "BuildPro",
    description: "Oversee software development projects.",
    location: "Toronto",
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

        <Swiper
          spaceBetween={16}
          slidesPerView={1.5}
          breakpoints={{
            768: { slidesPerView: 2.5 },
          }}
        >
          {addedJobs.map((job, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#f9f9f9] rounded-2xl p-6 shadow-md text-left flex flex-col justify-between h-full min-h-[280px] hover:shadow-lg transition duration-300">
                <div className="text-4xl text-[#00D5AE] mb-4">{job.icon}</div>
                <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                <p className="text-sm text-[#666] mb-2">{job.company}</p>
                <p className="text-sm text-gray-500 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#e0f7f3] text-[#00D5AE] px-3 py-1 rounded-full text-xs font-medium">
                    {job.location}
                  </span>
                  <span className="bg-[#e0f7f3] text-[#00D5AE] px-3 py-1 rounded-full text-xs font-medium">
                    {job.type}
                  </span>
                </div>
                <button className="text-[#00cc99] hover:underline text-sm font-medium mt-auto">
                  Apply Now &gt;
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="mt-10 border border-[#00cc99] bg-white text-[#00D5AE] hover:bg-[#00cc99] hover:text-white transition px-6 py-2 rounded-md text-sm font-medium cursor-pointer">
          View More
        </button>
      </div>
    </section>
  );
}
