"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full z-50 relative">
      <div className="absolute inset-0 hidden md:flex">
        <div className="w-[52%] bg-[#f2f2f2]" />
        <div className="w-[48%] bg-[#00cc99]" />
      </div>

      <div className="relative z-10 hidden md:flex h-20 w-full">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-16">
            <Link href="/" passHref>
              <div className="cursor-pointer -ml-3">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={120}
                  height={150}
                />
              </div>
            </Link>

            <nav className="flex space-x-11 text-black font-bold">
              <Link
                href="/"
                className={`cursor-pointer hover:text-[#00cc99] ${
                  isActive("/") ? "text-[#00cc99] font-bold" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/jobs"
                className={`cursor-pointer hover:text-[#00cc99] ${
                  isActive("/job") ? "text-[#00cc99] font-bold" : ""
                }`}
              >
                Job
              </Link>
              <Link
                href="/about-us"
                className={`cursor-pointer hover:text-[#00cc99] ${
                  isActive("/about") ? "text-[#00cc99] font-bold" : ""
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`cursor-pointer hover:text-[#00cc99] ${
                  isActive("/contact") ? "text-[#00cc99] font-bold" : ""
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-8 text-white font-medium mr-[0px]">
            <Link href="/signin" className="font-bold text-white">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="flex items-center bg-white text-black font-bold px-5 py-2.5 rounded-[10px] hover:bg-gray-100"
            >
              <Image
                src="/images/create.png"
                alt="create account"
                width={20}
                height={20}
                className="mr-2"
              />
              Create Account
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-20 bg-[#f2f2f2] flex items-center justify-center shadow z-50 px-4 relative">
        <Link href="/" passHref>
          <div className="cursor-pointer z-20">
            <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
          </div>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="absolute right-4 z-30 focus:outline-none"
        >
          <div className="w-10 h-10 rounded bg-[#00cc99] flex items-center justify-center">
            <div className="relative w-5 h-5 flex flex-col justify-between items-center py-1">
              <span
                className={`block h-[2px] bg-white transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-[6px]" : "w-5"
                }`}
                style={{ width: isOpen ? "20px" : "20px" }}
              />
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "w-3"
                }`}
              />
              <span
                className={`block h-[2px] bg-white transition-transform duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-[6px]" : "w-5"
                }`}
                style={{ width: isOpen ? "20px" : "20px" }}
              />
            </div>
          </div>
        </button>

        {isOpen && (
          <nav className="fixed top-20 left-4 right-4 z-[9999] bg-[#00cc99] rounded-xl shadow-xl px-6 py-6 space-y-4 text-white text-left font-bold">
            <Link href="/" onClick={() => setIsOpen(false)} className="block">
              Home
            </Link>
            <Link
              href="/jobs"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Job
            </Link>
            <Link
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Contact
            </Link>
            <hr className="border-white/30" />
            <Link
              href="/signin"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-4 bg-white text-black rounded-md px-4 py-2 hover:bg-gray-100 transition text-sm"
            >
              <Image
                src="/images/create.png"
                alt="create account"
                width={20}
                height={20}
                className="mr-2"
              />
              Create Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
