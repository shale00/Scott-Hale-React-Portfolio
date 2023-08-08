
import gitHubLogo from "./Icons/icons8-github-100.png";
import linkedInLogo from "./Icons/icons8-linkedin-100.png";
import gmailLogo from "./Icons/icons8-gmail-100.png";

export default function Home() {
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
    {
      img: gmailLogo,
      link: "mailto:sth0067@gmail.com",
      alt: "Gmail logo",
    },
  ]);

  return (
    <div className="my-8 flex justify-center space-x-3">

      {logos.map((logo, i) => (

          <a key={i} href={logo.link} target="_blank" rel="noopener noreferrer" className="hover:scale-125 hover:transition-colors">
            <img
              className="object-scale-down h-10 w-auto"
              src={logo.img}
              alt={logo.alt}
            />
          </a>
        
      ))}
    </div>
  );
}
