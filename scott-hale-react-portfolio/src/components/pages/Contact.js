import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Contact() {
  useEffect(() => {
    gsap.fromTo(
      "#tween",
      { x: -400, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25, stagger: 0.15 }
    );
  });

  return (
    <div className="p-4 grid gap-2">
      <p id="tween">
        You can reach me via email at:
        <a className="font-bold" href="mailto:sth0067@gmail.com">
          {" "}
          sth0067@gmail.com
        </a>
        .
      </p>
      <p id="tween">Also check out my links below!</p>
    </div>
  );
}
