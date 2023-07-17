import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import hand from "../assests/1337-waving-hand-sign.png";
import classes from "./Home.module.css";
const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  return (
    <div id="home">
      <Particles
        id="tsparticles"
        className={classes.tsparticles}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          fullScreen: {
            enable: false,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.05,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className={classes.body}>
        <h2>
          Hi <img src={hand} />
        </h2>
        <h1 className={classes.name}>
          I'm <span>Mansi Bhatnagar</span>
        </h1>
        <ul className={classes.container}>
          <li>
            <span>Frontend Developer</span>
          </li>
          <li>
            <span>Problem Solver</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
