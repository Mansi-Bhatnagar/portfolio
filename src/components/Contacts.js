import classes from "./Contacts.module.css";
import github from "../assests/github.svg";
import linkedin from "../assests/linkedin-in.svg";
import email from "../assests/envelope-solid.svg";
import leetcode from "../assests/leetcode.svg";
const Contacts = () => {
  return (
    <div className={classes.body} id="contacts">
      <h3 data-aos="fade-up" data-aos-mirror="true">
        Living, Learning And Leveling Up One Day At A Time.
      </h3>
      <div className={classes.imageContainer}>
        <a href="https://github.com/Mansi-Bhatnagar">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/mansi-bhatnagar-26a877225/">
          <img src={linkedin} />
        </a>
        <a href="bhatnagarmansi.03@gmail.com">
          <img src={email} />
        </a>
        <a href="https://leetcode.com/MansiBhatnagar/">
          <img src={leetcode} style={{ filter: "invert(1)" }} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
