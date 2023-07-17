import { useState } from "react";
import classes from "./Panel.module.css";

const Panel = (props) => {
  const [open, setOpen] = useState(false);
  const [openActive, setOpenActive] = useState(false);
  const { image, link, lang } = props;
  const clickHandler = () => {
    setOpen((prev) => !prev);
  };
  const transitionHandler = (e) => {
    if (e.propertyName.includes("flex")) {
      setOpenActive((prev) => !prev);
    }
  };
  return (
    <div
      className={`${classes.panel} ${open ? classes.open : undefined} ${
        openActive ? classes.openActive : undefined
      }`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={clickHandler}
      onTransitionEnd={transitionHandler}
    >
      <p>{lang}</p>
      <button>
        <a href={link}>View Live</a>
      </button>
    </div>
  );
};

export default Panel;
