import React, { useEffect } from "react";
import icons from "../Icons";
import { gsap } from "gsap";
// import downloadIcon from "../Icons/icons8-download-64.png";
// import resumeDoc from "../Images/Scott Hale Resume.pdf";
import "./Resume.css";

export default function Resume() {
  useEffect(() => {
    const firstAnimation = gsap.fromTo(
      "#tween",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25, stagger: 0.15 }
    );

    firstAnimation.eventCallback("onComplete", () => {
      gsap.to("#icons", {
        duration: 1.5,
        scale: 0.5,
        y: 60,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        delay: 1,
        stagger: {
          amount: 1.5,
          grid: "auto",
          from: "center",
        },
        onComplete: () => {
          // Animation is complete, you can perform any additional actions here
          console.log("Second animation complete!");
        },
      });
    });
  }, []);

  return (
    <div className="p-8">
      <div id="tween" className="flex justify-end">
        {/* <button
          className=" hover:bg-gray-700 text-black hover:text-white  text-xs font-bold py-1 px-2 rounded flex items-end border-2 border-gray-900"
          href={resumeDoc}
          download={resumeDoc}
        >
          <img src={downloadIcon} className="object-scale-down w-4"></img>
          Resume.pdf
        </button> */}
      </div>
      <div id="tween" className="p-10 grid gap-6">
        <h1 id="tween" className="text-3xl italic title">
          What I've Learned:
        </h1>
        <ul className="place-content-center  grid gap-2">
          <li
            className="p-2 md:p-5 
        "
            id="tween"
          >
            The fundamental concepts of web development, covering HTML, CSS, and
            JavaScript, as well as command line fundamentals and API
            consumption. I've engineered full-stack web applications, working with servers,
            databases, and other back end technologies.
          </li>
        </ul>
      </div>

      <div className="">
        <div id="tween" className="grid grid-cols-4 justify-items-center gap-4">
          {icons.map((icon, i) => (
            <img
              id="icons"
              key={i}
              src={icon.img}
              alt={icon.alt}
              className="object-scale-down h-14 place-items-center"
            />
          ))}
        </div>
      </div>
      <div className="pt-40 flex justify-center">
        <a target="_blank" href="https://icons8.com/icon/21278/css3"></a> Icons
        by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </div>
  );
}
