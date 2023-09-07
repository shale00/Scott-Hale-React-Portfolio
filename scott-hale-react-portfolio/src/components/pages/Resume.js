import React, { useEffect } from "react";
import icons from "../Icons";
import { gsap } from "gsap";
import downloadIcon from "../Icons/icons8-download-64v2.png";
// import resumeDoc from "../Images/Scott Hale Resume.pdf";
import "./Resume.css";

export default function Resume() {
  useEffect(() => {
    const firstAnimation = gsap.fromTo(
      "#tween",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: .55, stagger: 0.15 }
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
          console.log("Second animation complete!");
        },
      });
    });
  }, []);

  return (
    <div className="p-8 max-w-screen-lg mx-auto custom-border custom-border-none rounded-2xl">
      <div id="tween" className="p-10 grid gap-6">
        <div className="grid place-content-center">
          {/* <a
            id="button"
            className="text-black font-bold py-1 px-2 rounded shadow-md shadow-black flex items-end border-2 border-gray-900 max-w-fit place-content-center hover:scale-110 transition-all ease-in-out"
            href="https://docs.google.com/document/d/1iZMGhruoeSLATSP6G8rjYK7e-0YMvf2e3HJciQrAgJg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={downloadIcon}
              alt="download icon"
              className="object-scale-down w-8"
            ></img>
            Resume
          </a> */}
        </div>
        <h1 id="tween" className="text-3xl italic title">
          What I've Learned:
        </h1>
        <ul className="place-content-center  grid gap-2">
          <li className="p-2 md:p-5 md:max-w-[85%] md:mx-auto" id="tween">
            The fundamental concepts of web development, covering HTML, CSS, and
            JavaScript, as well as command line fundamentals and API
            consumption. I've engineered full-stack web applications, working
            with servers, databases, and other back end technologies. Click{" "}
            <a
              className="underline decoration-2 font-semibold Contact"
              href="https://docs.google.com/document/d/1iZMGhruoeSLATSP6G8rjYK7e-0YMvf2e3HJciQrAgJg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            to see my resume.
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
      <div className="pt-20 flex justify-center">
        <a target="_blank" href="https://icons8.com/icon/21278/css3"></a> Icons
        by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </div>
  );
}
