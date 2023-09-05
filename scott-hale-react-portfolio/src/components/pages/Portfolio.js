import React from "react";
import Card from "../Card";

import cohortRetortGif from "../Images/CR WalkthroughV2.gif";
import parktivitiesWalkthrough from "../Images/Parktivities-Walkthrough.gif";
import cqWalkthrough from "../Images/CQ-Walkthrough.gif";
import weatherWalkthrough from "../Images/Weather-Walkthrough.gif";
import schedulerWalkthrough from "../Images/Scheduler-Walkthrough.gif";

const Portfolio = () => {
  const projects = [
    {
      title: "Cohort Retort",
      img: cohortRetortGif,
      depLink: "https://cohort-retort-v1-3ead1d24c761.herokuapp.com",
      gitHubLink: "https://github.com/shale00/Cohort-Retort",
      alt: "Snapshot of a cohort-retort webpage",
      description:
        "This app was created using a full MERN stack. It is a social networking app designed to keep classmates in touch. Users can create an account and post messages and comments. Each user has their own profile page, where the user can update their information. To sign in as a guest user: Email: guest@email.com Password: password",
    },
    {
      title: "Parktivities",
      img: parktivitiesWalkthrough,
      depLink: "https://shale00.github.io/Parktivities/",
      gitHubLink: "https://github.com/shale00/Parktivities",
      alt: "Snapshot of the Parktivities app.",
      description:
        "This app allows the user to search national parks via state or activity. It was created using HTML, CSS, and JavaScript and uses two different 3rd Party API's to retrieve the park data and the state flag for each park respectively. It also stores the user's search history using local storage.",
    },
    {
      title: "Weather Dashboard",
      img: weatherWalkthrough,
      depLink: "https://shale00.github.io/Weather-Dashboard/",
      gitHubLink: "https://github.com/shale00/Weather-Dashboard",
      alt: "",
      description:
        "This is a simple weather app that allows the user to search a city and display the weather data. The app will save the users search history and allow the user to recall the weather data from their history as well. It was created using HTML, CSS, and Javascript and uses a 3rd Party API to retrieve the weather information.",
    },
    {
      title: "Work Day Scheduler",
      img: schedulerWalkthrough,
      depLink: "https://shale00.github.io/Work-Day-Scheduler/",
      gitHubLink: "https://github.com/shale00/Work-Day-Scheduler",
      alt: "A gif of the app.",
      description:
        "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    },
    {
      title: "Code Quiz",
      img: cqWalkthrough,
      depLink: "https://shale00.github.io/Code-Quiz/",
      gitHubLink: "https://github.com/shale00/Code-Quiz",
      alt: "Screenshot of app",
      description:
        "A quiz to test your knowledge of basic coding in javascript. This app was developed using just HTML, CSS, and Javascript.",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto custom-border custom-border-none rounded-2xl">
      <div className="flex flex-wrap gap-6 justify-center text-gray-200 p-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            img={project.img}
            depLink={project.depLink}
            gitHubLink={project.gitHubLink}
            alt={project.alt}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
