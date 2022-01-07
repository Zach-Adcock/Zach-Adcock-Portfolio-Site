import "./about.scss";
import Particles from "react-tsparticles";
import CSSLogo from "../../logos/css3.svg";
import HTMLLogo from "../../logos/html.svg";
import JavascriptLogo from "../../logos/javascript.svg";
import ReactLogo from "../../logos/react.svg";



export default function About() {
    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (about) => {
      };
    return (
        <div className="about">
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#0d47a1",
        //   },
        // },
        fullScreen: {enable: false},
        fpsLimit: 60,
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
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
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
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
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
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
            <div className="about-wrapper">
                <h1>About Zach</h1>
                <div className="about-text-container">
                    <p className="about-text">
                        I'm a front-end developer based in Seattle, WA. I have a passion for problem solving
                        and working through challenges with a team. Continuously striving to learn new concepts and
                        incorporate fresh tools keeps me motivated. 

                        Currently working as an intern for a Seattle based start-up.
                    </p>
                    <p className="about-text">
                        My current focus is on JavaScript, ReactJS, CSS, and HTML, but I'm always
                        learning new languages/frameworks to grow as a developer.
                    </p>
                    <p className="about-text">
                        Outside of work you can find me hiking, snowboarding, or playing soccer. I also love to read 
                        and play board games with friends and family.
                    </p>
                </div>
            </div>
            <div className="icon-container">
                <div className="icon-box">
                    <img src={CSSLogo} alt="CSSLogo" className='picture' />
                    <h2>CSS</h2>
                    <div className="box"></div>
                </div>
                <div className="icon-box">
                    <img src={HTMLLogo} alt="HTMLLogo"/>
                    <h2>HTML</h2>
                    <div className="box"></div>
                </div>
                <div className="icon-box">
                    <img src={JavascriptLogo} alt="JavascriptLogo"/>
                    <h2>JavaScript</h2>
                    <div className="box"></div>
                </div>
                <div className="icon-box">                    
                    <img src={ReactLogo} alt="ReactLogo"/>
                    <h2>React</h2>
                    <div className="box"></div>
                </div>
                
                
                
                
            </div>
        </div>
    )
}
