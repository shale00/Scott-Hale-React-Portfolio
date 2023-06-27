import { gsap } from "gsap";
import React, { useEffect } from "react";


export default function About() {

  useEffect(()=>{
    gsap.from(".section", {
      keyframes: [
        {x: -200},
        {x:200,},
        {x:0}
      ],
      ease: 'bounce'
    })

    
  });
 
  return (
    <div className="p-8 sm:p-32">
      <section className="section" >
        <h1 className="text-3xl text-white font-bold min-h-full md:min-h-full">
          &lt;h1&gt; <br className="p-10" />
          Hello World <br />
          &lt;/h1&gt;
        </h1>
      </section>
      <section className="section" >
        <p className="grid content-center place-content-center">
          I am a full-stack web developer with a passion for logical and easy to use
          applications and websites. As an experienced CPA, I bring a unique
          perspective to every project I undertake.
        </p>
      </section>

      <section className="section" >
        <p className="grid content-center place-content-center">
          With a focus on both financial and technical expertise, I am
          well-equipped to manage complex projects and lead teams under strict
          deadlines. My ability to work effectively with clients and colleagues
          alike has been a hallmark of my career.
        </p>
      </section>
    </div>
  );
}
