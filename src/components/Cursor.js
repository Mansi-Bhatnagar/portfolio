import classes from "./Cursor.module.css";
const Cursor = (props) => {
  const { mouseX, mouseY } = props;
  return (
    <div className={classes.cursor}>
      <div
        className={`${classes.circle} ${classes.cursorInner}`}
        style={{
          transform: `translate3d(${mouseX}px, ${mouseY}px,0)`,
          scale: 1,
          opacity: 1,
        }}
      ></div>
      <div
        className={`${classes.dot} ${classes.cursorInner}`}
        style={{
          transform: `translate3d(${mouseX}px, ${mouseY}px,0)`,
        }}
      ></div>
    </div>
  );
};
export default Cursor;
