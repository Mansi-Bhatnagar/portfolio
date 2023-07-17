import classes from "./Cards.module.css";
const Cards = (props) => {
  const { imageName, skill, filter, percent } = props;
  return (
    <figure
      className={classes.wrapper}
      data-aos="fade-up"
      data-aos-mirror="true"
      data-aos-duration="1000"
    >
      <img
        src={imageName}
        style={{
          filter: filter,
        }}
      />
      <h2>{skill}</h2>
      <figcaption>
        <h4>{percent}</h4>
      </figcaption>
      <div className={classes.overlay}></div>
    </figure>
  );
};

export default Cards;
