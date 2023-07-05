import { gsap } from "gsap";
import React, { useEffect } from "react";
import "./About.css";
import guySVG from "../Images/undraw_feeling_proud_qne1.svg";

export default function About() {

  useEffect(() => {
    gsap.fromTo(
      ".section",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25, stagger: 0.15 }
    );
  });

  function onMove(event) {
    let widthToProgress = gsap.utils.mapRange(0, window.innerWidth, 0, 1);
    let interpColor = gsap.utils.interpolate([
      "#FF0000",
      "#FF4501",
      "#FFDD01",
      "#78FF01",
      "#01F2FF",
      "#0156FF",
      "#2B01FF",
      "#9901FF",
      "#FF01DD",
    ]);
    let widthToColor = gsap.utils.pipe(widthToProgress, interpColor);

    let value = widthToColor(event.clientX);

    let helloElement = document.getElementById("helloWorld");
    helloElement.style.color = value;
  }

  

  return (
    <div onMouseMove={onMove} className="p-10 sm:p-16 grid gap-16 grid-cols-2  place-content-center">
      <div className="italic">
        <section className="section">
          <h1
            id="hello"
            className="hello text-xl text-gray-400 min-h-full md:min-h-full pl-5"
          >
            &lt;h1&gt;
          </h1>
        </section>
        <section className="section">
          <h1
            id="helloWorld"
            className="hello text-2xl text-white min-h-full md:min-h-full pl-16"
          >
            Hello World
          </h1>
        </section>
        <section className="section">
          <h1
            id="hello"
            className="hello text-xl text-gray-400 min-h-full md:min-h-full pl-5"
          >
            &lt;/h1&gt;
          </h1>
        </section>
      </div>

      <section className="section row-start-2 col-span-2 sm:max-w-md place-self-center md:col-span-1">
        <img src={guySVG} alt="guy sitting on a desk" className=" md:max-h-48" />
      </section>

      <section className="section row-start-3 col-span-2 w-3/4 shadow-emerald-50 place-self-center md:row-start-2 ">
        <p className="">
          I am a full-stack web developer with a passion for logical and easy to
          use applications and websites. As an experienced CPA, I bring a unique
          perspective to every project I undertake.
        </p>
      </section>

      {/* <section className="section pl-16">
        <p className="grid content-center place-content-center">
          With a focus on both financial and technical expertise, I am
          well-equipped to manage complex projects and lead teams under strict
          deadlines. My ability to work effectively with clients and colleagues
          alike has been a hallmark of my career.
        </p>
      </section> */}
    </div>
  );
}
