import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import "./Home.css";
import guySVG from "../Images/undraw_feeling_proud_qne1.svg";
import Typed from "typed.js";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".section",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: .75, stagger: 0.15 }
    );
  });

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hello World!^1000",
        "My name is Scott Hale^2000",
        "Welcome!^4000 ",
        // "Are...^1000 are you still here^150.^150.^150."
      ],
      typeSpeed: 75,
      startDelay: 2000,
      backSpeed: 40,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

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
    <div onMouseMove={onMove}>
      <div className="max-w-screen-lg mx-auto custom-border custom-border-none rounded-2xl">
        <div className="p-10 sm:p-16 grid gap-16 grid-cols-2">
          <div className="italic section row-start-1 col-span-2 place-self-center">
            <section className="section">
              <span
                id="helloWorld"
                className="hello text-2xl text-white min-h-full md:min-h-full mx-auto"
                ref={el}
              ></span>
            </section>
          </div>

          <section className="section row-start-2 col-span-2 sm:max-w-md place-self-center md:col-span-1">
            <img
              src={guySVG}
              alt="guy sitting on a desk"
              className=" md:max-h-48"
            />
          </section>

          <section className="section p-2 row-start-3 col-span-2 shadow-emerald-50 place-self-center md:row-start-2">
            <p className="">
              I am a full-stack web developer with a passion for logical and
              easy to use applications and websites. As an experienced CPA, I
              bring a unique perspective to every project I undertake.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
