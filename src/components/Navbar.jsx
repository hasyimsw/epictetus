import React from "react";
import Logo from "../assets/logo.svg";
import Search from "../assets/search.svg";
import Dropdown from "../assets/dropdown.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownList = [
    { text: "Internet", link: "/" },
    { text: "Books", link: "/" },
    { text: "Open Source", link: "/" },
  ];

  return (
    <nav className="max-w-[1080px] mx-auto lg:pt-16 pt-8 lg:px-0 px-4">
      <div className="flex items-center justify-between">
        <div className="flex md:hidden">
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path
                  d="M3 12H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-x-2 w-3/12 cursor-pointer">
          <img src={Logo} alt="Logo" />
          <NavLink to="/" className="text-lg text-white">
            Epictetus
          </NavLink>
        </div>
        <div className="hidden md:w-7/12 md:flex items-center gap-x-10 text-white">
          <NavLink to="/uidesign" className="hover:underline">
            UI Design
          </NavLink>
          <NavLink to="/frontend" className="hover:underline">
            Front-End
          </NavLink>
          <NavLink to="/backend" className="hover:underline">
            Back-End
          </NavLink>
          <div className="relative">
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={() => setDropdown(!dropdown)}>
              <p>Lainnya</p>
              <img src={Dropdown} alt="" />
            </div>
            {dropdown && (
              <ul className="absolute w-[170px] bg-gray-800 rounded shadow-xl mt-2">
                {dropdownList.map(({ text, link }) => (
                  <li
                    key={text}
                    className="border-b border-white/5 last:border-0">
                    <NavLink
                      to={link}
                      className="flex py-3 px-6 hover:bg-gray-700">
                      {text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="lg:hidden">
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="md:w-2/12 hidden lg:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 cursor-pointer">
              <img src={Search} alt="" />
            </div>
            <input
              type="text"
              className="bg-[#1F2937] opacity-60 py-2 px-6 rounded-full text-white text-sm pl-10"
              placeholder="Search ..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
