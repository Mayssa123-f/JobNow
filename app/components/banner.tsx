"use client";
import Image from "next/image";
import { FaSearchLocation, FaSearch, FaChartBar } from "react-icons/fa";
import { BsShieldShaded } from "react-icons/bs";

export default function Banner() {
  return (
    <section className="w-full min-h-[450px] relative bg-[#f2f2f2] overflow-hidden md:pb-20">
      <div className="hidden md:block absolute top-0 right-0 h-full w-[48%] bg-[#00cc99] rounded-bl-[50px] z-0" />{" "}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row w-full min-h-[450px]">
          <div className="w-full md:w-[65%] flex items-start justify-center bg-[#fbfbfb] md:bg-transparent">
            <div className="w-full px-4 pt-12 md:pt-24 pb-10 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Search, Find, &amp; Apply
              </h1>
              <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
                Find whatever job you need: Engineer, Doctor, Lawyer, Taxi
                Driver—you choose! And of course, we should know where you live
                because we don't want you to work far from home after all.
              </p>

              <div className="flex flex-row flex-wrap gap-2 items-center bg-white rounded-xl p-2 shadow w-full max-w-[500px] md:mx-0 mx-auto">
                <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md flex-1 md:w-auto min-w-[120px]">
                  <FaSearch className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Job title or Keyword"
                    className="bg-transparent text-black placeholder:text-gray-400 outline-none text-sm w-full"
                  />
                </div>

                <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md flex-1 md:w-auto min-w-[120px]">
                  <FaSearchLocation className="text-gray-500" />
                  <select className="bg-transparent text-sm text-gray-600 outline-none w-full cursor-pointer">
                    <option value="">Select Location</option>
                    <option value="Beirut">Beirut</option>
                    <option value="Tripoli">Tripoli</option>
                    <option value="Saida">Saida</option>
                    <option value="Zahle">Zahle</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="bg-[#00D5AE] hover:bg-[#00bfa0] text-white px-6 py-2 rounded-md text-sm transition cursor-pointer flex-none"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full min-h-[450px] overflow-hidden">
            <div className="absolute top-[10%] left-[30%] md:left-[30%] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[-10deg]">
              <FaSearch className="text-[#00D5AE] text-2xl" />
            </div>
            <div className="absolute bottom-[10%] left-[25%] md:left-[25%] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[-10deg]">
              <BsShieldShaded className="text-[#00D5AE] text-2xl" />
            </div>
            <div className="absolute bottom-[45%] right-[10%] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[10deg]">
              <FaChartBar className="text-[#00D5AE] text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
