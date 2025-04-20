import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: using Lucide icons
import { useNavigate } from "react-router-dom";
import User from "../assets/user.png";
import { FaRegUserCircle } from "react-icons/fa";
import ModalRegister from "./ModalRegister";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  // Mobile Menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const togalModal = () => setShowModal(!showModal);

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar bg-white h-14 md:h-20 w-full flex items-center justify-between shadow-lg fixed top-0 z-50 shadow-gray-500 py-4 pl-3 pr-2 md:pl-10 md:pr-16 ">
        <NavLink to="/" className="flex items-center">
          <img
            src="https://cdn.moneyme.com.au/web2/images/Global/mme-logo.svg"
            alt="Cooling Solution Logo"
            className=" h-10 w-24 md:h-16 md:w-32 mr-4 rounded"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-black font-semibold text-md capitalize">
          <NavLink
            to="/home-loans"
            className="hover:text-gray-300 "
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Home loans
          </NavLink>
          <NavLink
            to="/personal-loans"
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Personal loans
          </NavLink>
          <NavLink
            to="/business-loans"
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Business loans
          </NavLink>

          <NavLink
            to="/education-loans"
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Education loans
          </NavLink>

          <NavLink
            to="/health-insurance"
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Health Insurance
          </NavLink>
          <NavLink
            to="/about-us"
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            About us
          </NavLink>
          <button
            className="text-white text-lg font-semibold lg:flex gap-2 bg-black px-3  py-[15px] lg:py-2  rounded-lg"
            onClick={() => setShowModal(true)}
          >
            <img src={User} className="w-8 h-8 rounded-full" alt="" />
            {<span className="hidden tracking-wider md:block">Login</span>}
          </button>
          {showModal && <ModalRegister onClose={() => setShowModal(false)} />}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-black flex items-center space-x-2">
          <button
            className="text-white text-base font-semibold lg:flex items-center gap-2  rounded"
            onClick={() => setShowModal(true)}
          >
            <img src={User} className="w-9 h-9 rounded-full" alt="" />
            {<span className="hidden tracking-wider md:block">Login</span>}
          </button>
          {showModal && <ModalRegister onClose={() => setShowModal(false)} />}

          {isOpen ? (
            <X size={34} onClick={toggleMenu} />
          ) : (
            <Menu size={34} onClick={toggleMenu} />
          )}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 ">
          <img
            src="https://cdn.moneyme.com.au/web2/images/Global/mme-logo.svg"
            alt="Cooling Solution Logo"
            className="h-10 w-28"
          />
          <button onClick={toggleMenu} className="text-black">
            <X size={24} />
          </button>
        </div>
        <div className="menu-link flex flex-col space-y-4 p-6 text-black font-medium text-md">
          <NavLink
            to="/home-loans"
            onClick={toggleMenu}
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Home loans
          </NavLink>
          <NavLink
            to="/personal-loans"
            onClick={toggleMenu}
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Personal loans
          </NavLink>
          <NavLink
            to="/business-loans"
            onClick={toggleMenu}
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Business loans
          </NavLink>

          <NavLink
            to="/education-loans"
            onClick={toggleMenu}
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Education loans
          </NavLink>

          <NavLink
            to="/health-insurance"
            onClick={toggleMenu}
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Health Insurance
          </NavLink>

          <NavLink
            to="/about-us"
            onClick={toggleMenu}
            className="hover:text-gray-300"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            About Us
          </NavLink>
        </div>
      </div>

      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}

export default Navbar;
