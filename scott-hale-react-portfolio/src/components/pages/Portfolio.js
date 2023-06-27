import React from "react";
import projects from "../Projects";

export default function Portfolio() {
  return (
    <div className="flex flex-wrap gap-6 justify-center text-gray-200 p-6">
      {projects.map((proj, i) => (
        <div key={i} className="max-w-md rounded-lg overflow-hidden shadow-2xl shadow-black grid relative border-2 border-l-0 border-t-0 border-black">
          <img className="object-scale-down w-fit max-h-80 place-self-center object-top" src={proj.img} alt={proj.alt} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl  mb-2">{proj.title}</div>
            <p className="text-gray-300 text-base">{proj.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2 place-self-center ">
            <a
              href={proj.depLink}
              className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 rounded-s-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
            </a>
            <a
              href={proj.gitHubLink}
              className="inline-block bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-e-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 shadow-lg border-1"
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
