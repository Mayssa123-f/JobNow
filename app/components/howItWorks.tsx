"use client";

import React from "react";
import Image from "next/image";

const howItWorksItems = [
  {
    image: "/images/register.png",
    title: "Register",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    image: "/images/resume.png",
    title: "Create a Resume",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    image: "/images/find.png",
    title: "Find Job",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    image: "/images/apply.png",
    title: "Apply Job",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#fbfbfb] py-16 pt-30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-left mb-12">
          How it works
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
          <p className="text-lg text-[#8a8a8a] md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hidden md:block">
            <button className="bg-[#fbfbfb] border border-[#00cc99] text-[#00cc99] px-6 py-2 rounded-md hover:bg-[#00cc99] hover:text-white font-bold transition-all cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-12 cursor-pointer px-4 sm:px-10">
          {howItWorksItems.map((item, index) => (
            <div
              key={index}
              className="bg-white w-full h-[280px] sm:h-[220px] p-4 sm:p-6 rounded-xl shadow-md text-left transform transition duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-[#00D5AE] hover:ring-offset-2"
            >
              <div className="w-14 h-14 mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h1 className="text-lg sm:text-xl font-bold mb-2">
                {item.title}
              </h1>
              <p className="text-sm text-[#8a8a8a]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center mb-10">
          <button className="border border-[#00D5AE] text-[#00D5AE] hover:bg-[#00D5AE] hover:text-white transition px-6 py-2 rounded-md text-sm font-medium cursor-pointer">
            Learn More
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pt-30">
          <div className="md:w-[40%] w-full">
            <Image
              src="/images/hiwIm.png"
              alt="Dream Company"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="md:col-span-3 md:w-[60%] flex flex-col gap-4 text-center md:text-left items-center md:items-start w-full pb-50">
            <h2 className=" md:text-4xl font-bold text-black">
              We will help you to become an employee in your dream company
            </h2>
            <p className="text-[#8a8a8a] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-[#fbfbfb] border border-[#00cc99] text-[#00cc99] px-6 py-2 rounded-md hover:bg-[#00cc99] hover:text-white font-bold transition-all cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
