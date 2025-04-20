import React, { useState, useEffect } from "react";
import { ArrowBigUpDash } from "lucide-react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          aria-label="Go to top"
          title="Go to top"
          className="fixed z-50 bottom-5 right-5 sm:bottom-5 sm:right-5 lg:bottom-8 lg:right-10 bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 lg:p-5 rounded-full shadow-lg transition-all"
          onClick={handleGoToTop}
        >
          <ArrowBigUpDash className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
        </button>
      )}
    </>
  );
};

export default GoToTop;
