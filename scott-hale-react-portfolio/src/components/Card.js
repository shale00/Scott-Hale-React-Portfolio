import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Card = ({ title, img, depLink, gitHubLink, alt, description }) => {
  useEffect(() => {
    gsap.fromTo(
      "#tween",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25, stagger: 0.15 }
    );
  }, [] );

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      id="tween"
      className="max-w-lg rounded-lg overflow-hidden shadow-2xl shadow-black grid relative border-2 border-l-0 border-t-0 border-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={img}
        alt={alt}
        className={`w-full ${
          hovered ? "brightness-[10%]" : "brightness-100"
        } transition-all duration-500 ease-in-out`}
      />
      
        <div
          className={` ${
            hovered ? "opacity-100" : "opacity-0"
          }  absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center text-gray-100 p-4 transition-all duration-500 ease-in-out`}
        >
          <div className="top-0 left-0 w-full text-center lg:pt-8">
            <p
              className={`lg:text-3xl text-2xl font-bold mb-4 ${
                hovered
                  ? "opacity-100"
                  : "opacity-0"
              } transition-all duration-1000`}
            >
              {title}
            </p>
          </div>
          <div className="">
            <p className={`lg:m-6 m-2 text-left text-md md:text-md ${
                hovered
                  ? "opacity-100"
                  : "opacity-0"
              } transition-all duration-1000`}>
              {description}
            </p>
            <div className="flex space-x-4 justify-center pt-2">
              <button
                href={depLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:py-2 lg:px-4 py-1 px-2 bg-blue-600 shadow-lg shadow-black rounded-lg hover:scale-110 hover:bg-blue-900 transition-all ease-out duration-300"
              >
                Deployment
              </button>
              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:py-2 lg:px-8 py-1 px-7 bg-blue-600 shadow-lg shadow-black rounded-lg hover:scale-110 hover:bg-blue-900 transition-all ease-out duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Card;
