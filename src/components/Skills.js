import Cards from "../UI/Cards";
import classes from "./Skills.module.css";
import pyhton from "../assests/python.svg";
import c from "../assests/c++.svg";
import java from "../assests/java.svg";
import javaScript from "../assests/square-js.svg";
import html from "../assests/html5.svg";
import css from "../assests/css3-alt.svg";
import react from "../assests/react.svg";
import redux from "../assests/icons8-redux-48.svg";
import bootstrap from "../assests/bootstrap-logo.png";
import mui from "../assests/mui.jpg";
import typeScript from "../assests/typescript.png";
const imageData = [
  {
    imageName: c,
    skill: "C/C++",
    filter:
      "invert(100%) sepia(0%) saturate(7%) hue-rotate(196deg) brightness(104%) contrast(104%)",
    id: 1,
    percent: "90%",
  },
  {
    imageName: pyhton,
    skill: "python",
    filter: "invert(1)",
    id: 2,
    percent: "75%",
  },
  {
    imageName: java,
    skill: "java",
    filter: "invert(1)",
    id: 3,
    percent: "70%",
  },
  {
    imageName: html,
    skill: "html",
    filter: "invert(1)",
    id: 4,
    percent: "80%",
  },
  {
    imageName: css,
    skill: "css",
    filter: "invert(1)",
    id: 5,
    percent: "85%",
  },
  {
    imageName: javaScript,
    skill: "javaScript",
    filter: "invert(1)",
    id: 6,
    percent: "70%",
  },
  {
    imageName: react,
    skill: "react",
    filter: "invert(1)",
    id: 7,
    percent: "70%",
  },
  {
    imageName: redux,
    skill: "redux",
    filter:
      "invert(100%) sepia(0%) saturate(7%) hue-rotate(196deg) brightness(104%) contrast(104%)",
    id: 8,
    percent: "65%",
  },
  {
    imageName: bootstrap,
    skill: "bootstrap",
    filter:
      "invert(99%) sepia(10%) saturate(2%) hue-rotate(198deg) brightness(111%) contrast(100%)",
    id: 9,
    percent: "70%",
  },
  {
    imageName: mui,
    skill: "mui",
    filter:
      "invert(99%) sepia(10%) saturate(2%) hue-rotate(198deg) brightness(111%) contrast(100%)",
    id: 10,
    percent: "70%",
  },
  {
    imageName: typeScript,
    skill: "typeScript",
    filter:
      "invert(99%) sepia(10%) saturate(2%) hue-rotate(198deg) brightness(111%) contrast(100%)",
    id: 11,
    percent: "80%",
  },
];
const Skills = () => {
  const data = imageData.map((img) => {
    return (
      <Cards
        key={img.id}
        imageName={img.imageName}
        skill={img.skill}
        filter={img.filter}
        percent={img.percent}
      />
    );
  });
  return (
    <div className={classes.body} id="skills" style={{ overflow: "hidden" }}>
      <h1 data-aos="slide-left" data-aos-delay="100" data-aos-mirror="true">
        SKILLS
      </h1>
      <div
        className={classes.underline}
        data-aos="slide-left"
        data-aos-mirror="true"
        data-aos-delay="100"
      ></div>
      <div className={classes.imageContainer}>{data}</div>
    </div>
  );
};

export default Skills;
