
import gitHubLogo from "./Images/GitHub_Logo_White.png";
import linkedInLogo from "./Images/LI-Logo.png";

export default function About() {
  const logos = ([
    {
      img: gitHubLogo,
      link: "https://github.com/shale00",
      alt: "GitHub logo",
    },
    {
      img: linkedInLogo,
      link: "https://www.linkedin.com/in/scott-hale/",
      alt: "LinkedIn logo",
    },
  ]);

  return (
    <div className="my-8 flex justify-center space-x-3 ">
      <div>
        <p>Check out my links:</p>
      </div>

      {logos.map((logo, i) => (

          <a key={i} href={logo.link} target="_blank" rel="noopener noreferrer">
            <img
              className="object-scale-down h-auto w-16"
              src={logo.img}
              alt={logo.alt}
            />
          </a>
        
      ))}
    </div>
  );
}
