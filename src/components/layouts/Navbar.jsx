import React from "react";
import logo from "../../assets/image/logo.png"

export const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 bg-[#030014]/70 backdrop-blur-xl border border-white/10 rounded-2xl py-3.5 px-6 sm:px-8 shadow-[0_10px_30px_rgba(3,0,20,0.5)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="h-[28px] hover:cursor-pointer hover:scale-105 transition-transform duration-300" src={logo} alt="Joglo Digital" />
        </div>
        <ul className="flex gap-1 sm:gap-2">
          <li>
            <a href='#' className="text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl py-1.5 px-3 sm:px-4 text-sm font-medium transition-all duration-300">
              Beranda
            </a>
          </li>
          <li>
            <a href="#kenapakami" className="text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl py-1.5 px-3 sm:px-4 text-sm font-medium transition-all duration-300">
              Layanan
            </a>
          </li>
          <li>
            <a href="#contact" className="text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl py-1.5 px-3 sm:px-4 text-sm font-medium transition-all duration-300">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

