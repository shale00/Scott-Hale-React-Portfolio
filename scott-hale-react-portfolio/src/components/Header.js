import Navigation from "./Navigation";
import React, { useState } from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Projects") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className=" top-0 left-0 right-0 p-3">
        {/* <div className="text-blue-300">
          <h1 className="text-3xl">Scott's Portfolio</h1>
        </div> */}
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
      {renderPage()}
    </div>
  );
}
