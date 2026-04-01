"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-black to-[#0f0f0f] text-gray-300 backdrop-blur-md">
      
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            Learn Horizon
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Creating unforgettable travel experiences with comfort, elegance,
            and personalized service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            {["Home", "Tours", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative inline-block group"
                >
                  {item}

                  {/*  animated underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#C49A3A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>horizonlearn57@gmail.com</li>
            <li>+250 782 118 909</li>
            <li>Kigali, Rwanda</li>

            {/* 📱 WhatsApp */}
            <li>
              <a
                href="https://wa.me/250782118909"
                target="_blank"
                className="flex items-center gap-2 hover:text-[#C49A3A] transition"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Follow Us
          </h4>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C49A3A] hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C49A3A] hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/250782118909"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C49A3A] hover:text-black transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Learn Horizon. All rights reserved.
      </div>
    </footer>
  );
}