import Navigation from "./Navigation";
import React, { useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="sticky top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-blue-900 to-sky-700 opacity-90 z-50 p-3">
        <div className="text-blue-300">
          <h1 className="text-3xl">Scott's Portfolio</h1>
        </div>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
        {renderPage()}
    </div>
  );
}
