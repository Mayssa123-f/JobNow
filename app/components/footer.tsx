"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#00cc99] ">
      <div className="container mx-auto px-12 py-30 md:px-8 pb-16">
        <div className="flex justify-center -translate-y-1/2"></div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-y-6 md:gap-y-0 md:gap-x-55 text-white">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              <Link href="/" passHref>
                <div className="cursor-pointer">
                  <Image
                    src="/images/LogoF.png"
                    alt="Logo"
                    width={120}
                    height={150}
                  />
                </div>
              </Link>
            </h1>
            <p className="text-sm text-gray-100 leading-snug">
              Where jobs are so much easier to find than finding a needle in a
              haystack!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-15 sm:gap-x-15 md:gap-y-0 md:gap-x-20">
            <div className="md:text-center text-left">
              <h3 className="text-base text-lg font-bold mb-3">Company</h3>
              <div className="inline-block text-left relative left-0  md:left-14.5">
                <p className="text-sm text-gray-100 leading-snug">
                  Address: 123 Fifth Avenue, New York - 10018, USA
                </p>
                <p className="text-sm text-gray-100 leading-snug mt-1">
                  Call us: (+100) 456 7890
                </p>
                <p className="text-sm text-gray-100 leading-snug mt-1">
                  Email: yourjob@example.com
                </p>
                <p className="text-sm text-gray-100 leading-snug mt-1">
                  Mon-Sat: 9:00 AM - 18:00 PM
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-base md:text-lg font-bold mb-3">Pages</h3>
              <ul className="inline-block text-left">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#booking", label: "Booking" },
                  { href: "#facilities", label: "Facilities" },
                  { href: "#about", label: "About Us" },
                  { href: "#location", label: "Location" },
                  { href: "#contact", label: "Contact" },
                ].map((page, index) => (
                  <li key={index}>
                    <span className="w-7 inline-block text-right text-sm">
                      &gt;
                    </span>
                    <a
                      href={page.href}
                      className="text-sm hover:text-black transition-colors cursor-pointer"
                    >
                      {page.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:text-center text-left">
              <h3 className="text-base md:text-lg font-bold mb-3">
                Contact Us
              </h3>
              <div className="flex md:justify-center justify-start gap-3">
                <Link
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogle className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                </Link>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
