"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full min-h-[450px] relative bg-[#f2f2f2] overflow-hidden">
      {/* Right side full background outside container (Desktop only) */}
      <div className="hidden md:block absolute top-0 right-0 h-full w-[48%] bg-[#00cc99] rounded-bl-[80px] z-0" />

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col md:flex-row w-full min-h-[450px]">
          {/* Left side: Text with mobile-only bg-[#fbfbfb] */}
          <div className="w-full md:w-[65%] flex items-start justify-center bg-[#fbfbfb] md:bg-transparent">
            <div className="w-full px-6 md:px-20 pt-24 pb-10 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-8 text-black">
                Search, Find, &amp; Apply
              </h1>
              <p className="text-black mb-6 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex flex-row flex-wrap gap-2 items-center bg-white rounded-xl p-2 shadow mb-10 md:w-[680px] mx-auto md:ml-1">
                <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md flex-1">
                  <Image
                    src="/images/search.png"
                    width={20}
                    height={20}
                    alt="Search Icon"
                  />
                  <input
                    type="text"
                    placeholder="Job title or Keyword"
                    className="bg-transparent text-black placeholder:text-black outline-none text-sm w-full"
                  />
                </div>

                <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md flex-1 min-w-0">
                  <Image
                    src={"/images/location.png"}
                    width={20}
                    height={20}
                    alt="Location Icon"
                  />
                  <select className="bg-transparent text-sm text-black outline-none w-full cursor-pointer">
                    <option value="">Select Location</option>
                    <option value="Beirut">Beirut</option>
                    <option value="Tripoli">Tripoli</option>
                    <option value="Saida">Saida</option>
                    <option value="Zahle">Zahle</option>
                  </select>
                </div>

                <button className="bg-[#00cc99] hover:bg-[#00bfa0] text-white px-6 py-2 rounded-md text-sm transition cursor-pointer flex-none w-auto">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-[48%] min-h-[450px] overflow-hidden bg-[#00cc99] md:bg-transparent">
            <div className="absolute top-[10%] left-[40px] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[-10deg]">
              <Image
                src="/images/top.png"
                width={30}
                height={30}
                alt="Top Icon"
              />
            </div>

            <div className="absolute bottom-[10%] left-[40px] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[-10deg]">
              <Image
                src="/images/center.png"
                width={30}
                height={30}
                alt="Center Icon"
              />
            </div>

            <div className="absolute bottom-[45%] right-[40px] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[10deg]">
              <Image
                src="/images/bottom.png"
                width={30}
                height={30}
                alt="Bottom Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
