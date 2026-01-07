import React from "react";
import logo from "../../assets/image/logo.png"

export const Navbar = () => {
  return (
    <div className="fixed py-4 px-10 bg-white top-0 left-0 right-0">
      <div className="flex items-center justify-between">
        <img className="h-[25px] hover:cursor-pointer" src={logo} />
        <ul className="flex gap-3">
          <a href='#' className="hover:bg-[#7A4F2E] hover:text-[#fff] rounded-lg py-1 px-2 hover:cursor-pointer">
            Beranda
          </a>
          <a href="#kenapakami" className="hover:bg-[#7A4F2E] hover:text-[#fff] rounded-lg py-1 px-2 hover:cursor-pointer">
            Layanan
          </a>
          <a href="#contact" className="hover:bg-[#7A4F2E] hover:text-[#fff] rounded-lg py-1 px-2 hover:cursor-pointer">
            Kontak
          </a>
        </ul>
      </div>
    </div>
  );
};
