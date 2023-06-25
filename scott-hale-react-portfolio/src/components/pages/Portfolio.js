import React from "react";
import projects from "../Projects";

export default function Portfolio() {
  return (
    <div className="flex flex-wrap">
      {projects.map((proj, i) => (
        <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={proj.img} alt={proj.alt} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{proj.title}</div>
            <p className="text-gray-700 text-base">{proj.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href={proj.depLink}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
            </a>
            <a
              href={proj.gitHubLink}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
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
