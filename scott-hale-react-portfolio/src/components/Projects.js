import codeBoardImg from './Images/CodeBoard.png';
import portfolioImg from './Images/Snapshot-of-Portfolio.png';
import parktivitiesImg from './Images/Parktivities screenshot.png';
import weatherAppImg from './Images/weatherDashboar-screenshot.png';
import workDayImg from './Images/05-third-party-apis-homework-demo.gif';


const projects = [
    {
      title: "Original Portfolio",
      img: portfolioImg,
      depLink: "https://shale00.github.io/scott-hale-portfolio/",
      gitHubLink: "https://github.com/shale00/scott-hale-portfolio",
      alt: "Snapshot of a portfolio webpage",
      description: "This is one of the first assignments for the full stack web dev bootcamp and it was made from scratch using only html and css."
    },
    {
      title: "Code Board",
      img: codeBoardImg,
      depLink: "https://codeboard.herokuapp.com/",
      gitHubLink: "https://github.com/shale00/code-board",
      alt: "Snapshot of the message board page.",
      description: "This app is a job and career resource posting website where users can create an account. Once the user has created an account, they will be able to view, create, and delete their respective posts on the homepage."
    },
    {
      title: "Parktivities",
      img: parktivitiesImg,
      depLink: "https://shale00.github.io/Parktivities/",
      gitHubLink: "https://github.com/shale00/Parktivities",
      alt: "Snapshot of the Parktivities app.",
      description: "This app allows the user to search national parks via state or activity. It was created using HTML, CSS, and JavaScript and uses two different 3rd Party API's to retrieve the park data and the state flag for each park respectively."
    },
    {
      title: "Weather Dashboard",
      img: weatherAppImg,
      depLink: "https://shale00.github.io/Weather-Dashboard/",
      gitHubLink: "https://github.com/shale00/Weather-Dashboard",
      alt: "",
      description: "This is a simple weather app that allows the user to search a city and display the weather data. The app will save the users search history and allow the user to recall the weather data from their history as well."
    },
    {
      title: "Work Day Scheduler",
      img: workDayImg,
      depLink: "https://shale00.github.io/Work-Day-Scheduler/",
      gitHubLink: "https://github.com/shale00/Work-Day-Scheduler",
      alt: "A gif of the app.",
      description: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."
    },
    // {
    //   title: "",
    //   img: "",
    //   depLink: "",
    //   gitHubLink: "",
    //   alt: "",
    //   description: ""
    // }
  ];

export default projects;