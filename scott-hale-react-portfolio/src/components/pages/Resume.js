import React from "react";
import icons from "../Icons";

export default function Resume() {
  return (
    <div>
      <h1>What I've Learned</h1>
      <ul>
        <li>I've learned the fundamental concepts of web development, covering HTML, CSS, and JavaScript, as well as command line fundamentals and API consumption.</li>
        <li>I've engineered full-stack web applications, working with servers, databases, and other back end technologies, and connecting them to the front end.</li>
        <li>Most recently I've learned how to create single-page applications with React (this portfolio!).</li>
      </ul>

      <div>
        
        {icons.map((icon, i) => (
          <img key={i} src={icon.img} alt={icon.alt} className="object-scale-down h-14" />
        ))}

        
      </div>
      <a target="_blank" href="https://icons8.com/icon/21278/css3"></a> Icons by <a target="_blank" href="https://icons8.com">Icons8</a>

    </div>
  );
}
