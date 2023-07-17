import { useState } from "react";
import Panel from "../UI/Panel";
import classes from "./Projects.module.css";
import book from "../assests/bookstore.png";
import socialMedia from "../assests/socialMedia.png";
import flag from "../assests/flag.png";
import fylo from "../assests/fylo.png";
import card from "../assests/card.png";
const projects = [
  {
    image: fylo,
    link: "https://mansi-bhatnagar.github.io/fylo-landing-page-with-two-column-layout/",
    lang: "HTML  CSS",
    id: 1,
  },
  {
    image: flag,
    link: "https://mansi-bhatnagar.github.io/Rest-countries-API-with-color-theme-switcher/",
    lang: "HTML  CSS  JS Bootstrap",
    id: 2,
  },
  {
    image: book,
    link: " https://mansi-bhatnagar.github.io/bookstore-management-system/",
    lang: "HTML  CSS JS Bootstrap",
    id: 3,
  },
  {
    image: socialMedia,
    link: "https://fluffy-granita-0dd9eb.netlify.app/",
    lang: "React.js",
    id: 4,
  },
  {
    image: card,
    link: "https://mansi-bhatnagar.github.io/interactive-card-details-form-main/",
    lang: "HTML  CSS JS",
    id: 5,
  },
];
const Projects = () => {
  const data = projects.map((proj) => {
    return (
      <Panel
        key={proj.id}
        image={proj.image}
        link={proj.link}
        lang={proj.lang}
      />
    );
  });
  const [isActive, setIsActive] = useState(false);
  const clickHandler = () => {
    setIsActive(true);
  };
  return (
    <div className={classes.body} id="projects" style={{ overflow: "hidden" }}>
      <h1
        className={`${classes.projectH} ${
          isActive ? undefined : classes.active
        }`}
      >
        PROJECTS
      </h1>
      <div
        className={`${classes.underline} ${
          isActive ? undefined : classes.active
        }`}
      ></div>
      <div
        className={`${classes.overlay} ${
          isActive ? classes.active : undefined
        }`}
        data-aos="fade-down-right"
        data-aos-delay="100"
        data-aos-duration="4000"
        onClick={clickHandler}
      >
        <h1>PROJECTS</h1>
      </div>
      <div className={classes.panels}>{data}</div>
      <button
        className={classes.githubBtn}
        data-aos="fade-up"
        data-aos-mirror="true"
      >
        <a href="https://github.com/Mansi-Bhatnagar">View more on Github</a>
      </button>
    </div>
  );
};

export default Projects;
