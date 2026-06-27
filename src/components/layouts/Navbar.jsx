import React from "react";
import logo from "../../assets/image/logo.png"

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-5 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-[26px] hover:cursor-pointer transition-opacity hover:opacity-90 duration-200" src={logo} alt="Joglo Digital" />
        </div>
        <nav>
          <ul className="flex gap-2 sm:gap-4">
            <li>
              <a href='#root' className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200 py-1.5 px-3 rounded-md hover:bg-stone-200/60">
                Beranda
              </a>
            </li>
            <li>
              <a href="#kenapakami" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200 py-1.5 px-3 rounded-md hover:bg-stone-200/60">
                Layanan
              </a>
            </li>
            <li>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200 py-1.5 px-3 rounded-md hover:bg-stone-200/60">
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


