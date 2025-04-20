import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SquareX } from "lucide-react";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ModalRegister = ({ onClose }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    onClose();
    console.log(formData);
    setFormData({ username: "", password: "" });
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      handleClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center px-2 sm:px-4 py-6 overflow-y-auto"
    >
      <div
        className={`bg-white border-2 border-dashed border-gray-400 w-full max-w-lg p-5 rounded-xl flex flex-col gap-5 transition-all duration-300 ${
          isClosing ? "modal-fade-out" : "modal-fade-in"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-black">Welcome to Moneyme</h1>
          <button onClick={handleClose} aria-label="Close modal">
            <SquareX size={25} />
          </button>
        </div>

        <hr className="bg-gray-400 w-full" />

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-blue-300"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-blue-300"
            required
          />

          <button
            type="submit"
            className="bg-red-600 text-white w-full py-3 rounded-lg font-bold text-center"
          >
            Log In
          </button>

          <div className="flex justify-between items-center text-sm flex-wrap gap-y-2">
            <label className="flex items-center text-gray-600 font-semibold">
              <input
                type="checkbox"
                className="mr-2 accent-blue-600"
                name="savepassword"
              />
              Save Password
            </label>

            <button
              type="button"
              className="text-red-600 font-semibold underline"
            >
              Forget Password?
            </button>
          </div>
        </form>

        {/* Alt sign-in */}
        <div className="mt-6">
          <h1 className="text-sm font-semibold text-gray-500 text-center">
            Sign In with More Methods
          </h1>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
            <button className="border border-dashed border-gray-300 p-3 rounded-lg flex justify-center items-center">
              <FaFacebook size={25} className="text-blue-600" />
            </button>
            <button className="border border-dashed border-gray-300 p-3 rounded-lg flex justify-center items-center">
              <FaWhatsapp size={25} className="text-green-600" />
            </button>
            <button className="border border-dashed border-gray-300 p-3 rounded-lg flex justify-center items-center">
              <FaLinkedin size={25} className="text-blue-500" />
            </button>
            <button className="border border-dashed border-gray-300 p-3 rounded-lg flex justify-center items-center">
              <CiMail size={25} className="text-red-600" />
            </button>
            <button className="border border-dashed border-gray-300 p-3 rounded-lg flex justify-center items-center">
              <FaTwitter size={25} className="text-sky-500" />
            </button>
          </div>

          <hr className="bg-gray-400 mt-6 w-full" />
        </div>

        {/* Sign-Up prompt */}
        <p className="text-sm font-semibold text-gray-500 text-center mt-2">
          Don't have an account yet?{" "}
          <button type="button" className="text-red-600 underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default ModalRegister;
