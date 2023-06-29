import React, { useEffect} from "react";
import projects from "../Projects";
import { gsap } from "gsap";

export default function Portfolio() {
  useEffect(() => {
    gsap.fromTo(
      "#tween",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25, stagger: 0.15 }
    );
  });

  // useEffect(() => {
  //   const elements = document.querySelectorAll("#tween");

  //   const animations = [];

  //   elements.forEach((element) => {
  //     const animation = gsap.to(element, {
  //       // Define your animation properties
  //       scale: 1.2,
  //       duration: 0.3,
  //       ease: "power1.inOut",
  //     });

  //     element.addEventListener("mouseenter", () => {
  //       // Play the animation when the mouse enters the element
  //       animation.play();
  //     });

  //     element.addEventListener("mouseleave", () => {
  //       // Reverse the animation when the mouse leaves the element
  //       animation.reverse();
  //     });

  //     animations.push(animation);
  //   });

  //   // Return a cleanup function to cancel the animations if needed
  //   return () => {
  //     animations.forEach((animation) => animation.kill()); // Cancel the animations if they're still running
  //   };
  // }, []);



  return (
    <div className="flex flex-wrap gap-6 justify-center text-gray-200 p-6">
      {projects.map((proj, i) => (
        <div id="tween" key={i} className="max-w-md rounded-lg overflow-hidden shadow-2xl shadow-black grid relative border-2 border-l-0 border-t-0 border-black
        hover:bg-slate-800 hover:!scale-105">
          <img className="object-scale-down w-fit max-h-80 place-self-center object-top hover:snap-start" src={proj.img} alt={proj.alt} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl  mb-2">{proj.title}</div>
            <p className="text-gray-300 text-base">{proj.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2 place-self-center ">
            <a
              href={proj.depLink}
              className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 rounded-s-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 shadow-lg hover:scale-110 hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
            </a>
            <a
              href={proj.gitHubLink}
              className="inline-block bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-e-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 shadow-lg border-1 hover:scale-110 hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
