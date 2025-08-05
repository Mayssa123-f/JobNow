"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#f2f2f2] min-h-[450px]"
    >
      <div className="relative flex flex-col md:flex-row w-full min-h-[450px] z-10 bg-[#fbfbfb] md:bg-[#f2f2f2]">
        {/* Left side: text and search */}
        <div className="w-full md:w-[55%] flex items-start justify-center">
          <div className="w-full px-6 md:px-20 pt-24 pb-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-black">
              Search, Find, &amp; Apply
            </h1>

            <p className="text-black mb-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex flex-row flex-wrap gap-2 items-center bg-white rounded-xl p-2 shadow w-full max-w-none mb-10">
              <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md flex-1 min-w-0">
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

        {/* Right side: icons and green block */}
        <div className="relative w-full md:w-[45%] min-h-[450px] overflow-hidden bg-[#00cc99] md:rounded-bl-[100px]">
          <div className="absolute top-[10%] left-[15%] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[-10deg]">
            <Image
              src="/images/top.png"
              width={30}
              height={30}
              alt="Top Icon"
            />
          </div>

          <div className="absolute bottom-[10%] left-[10%] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[-10deg]">
            <Image
              src="/images/center.png"
              width={30}
              height={30}
              alt="Center Icon"
            />
          </div>

          <div className="absolute bottom-[45%] right-[10%] w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow rotate-[10deg]">
            <Image
              src="/images/bottom.png"
              width={30}
              height={30}
              alt="Bottom Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
