import React from "react";
import Logo from "../assets/logo.svg";
import Search from "../assets/search.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-[1080px] mx-auto pt-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3 w-3/12 cursor-pointer">
          <img src={Logo} alt="Logo" />
          <NavLink to="/" className="text-lg text-white">
            Epictetus
          </NavLink>
        </div>
        <div className="w-7/12">
          <ul className="flex items-center gap-x-14 text-white">
            <li>
              <NavLink to="/uidesign" className="hover:underline">
                UI Design
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="hover:underline">
                Front-End
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="hover:underline">
                Back-End
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="hover:underline">
                Lainnya
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-2/12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 cursor-pointer">
              <img src={Search} alt="" />
            </div>
            <input
              type="text"
              className="bg-[#1F2937]/60 py-2 px-6 rounded-full text-white text-sm pl-10 focus:ring-red-500 focus:border-red-700"
              placeholder="Search ..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
