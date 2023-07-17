import { useState } from "react";
import m from "../assests/m.jpg";
import classes from "./Navbar.module.css";
import hamburger from "../assests/hamburger.svg";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleHandler = () => {
    console.log(isActive);
    setIsActive((prev) => !prev);
  };
  const clickHandler1 = () => {
    const ele = document.getElementById("skills");
    ele.scrollIntoView({ behavior: "smooth" });
  };
  const clickHandler2 = () => {
    const ele = document.getElementById("projects");
    ele.scrollIntoView({ behavior: "smooth" });
  };
  const clickHandler3 = () => {
    const ele = document.getElementById("contacts");
    ele.scrollIntoView({ behavior: "smooth" });
  };
  const clickHandler4 = () => {
    const ele = document.getElementById("home");
    ele.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className={classes.nav}>
      <a onClick={clickHandler4}>
        <img src={m} />
      </a>
      <div className={`${isActive ? classes.background : undefined}`}>
        <button className={classes.menu} onClick={toggleHandler}>
          <img src={hamburger} />
        </button>
        <ul className={`${isActive ? classes.active : undefined}`}>
          <li>
            <a onClick={clickHandler1}>Skills</a>
          </li>
          <li>
            <a onClick={clickHandler2}>Projects</a>
          </li>
          <li>
            <a onClick={clickHandler3}>Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
