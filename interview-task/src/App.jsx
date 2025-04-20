import React from "react";
import RoutesComponent from "./routess/routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <RoutesComponent />
      <GoToTop />
      <Footer />
    </>
  );
};

export default App;
