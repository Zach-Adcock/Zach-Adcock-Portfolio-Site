import "./about.scss";
import Particles from "react-tsparticles";
import CSSLogo from "../../logos/css.png";
import HTMLLogo from "../../logos/html.png";
import JavascriptLogo from "../../logos/javascript.png";
import ReactLogo from "../../logos/react.png";
import GitLogo from "../../logos/git.png";
import NodeLogo from "../../logos/node.png"



export default function About() {
    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (about) => {
      };
    return (
        <div className="about" id="about">
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "$mainGrey",
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
              distance: 100,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          orbit: {
            reduceDuplicates: true,
          },  
          color: {
            value: "#ffffff52",
          },
          links: {
            color: "#ffffffc1",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          bounce: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            // outMode: "bounce",
            random: false,
            speed: 1,
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
            random: true,
            type: "circle",
          },
          size: {
            random: true,
            value: 50,
          },
        },
        detectRetina: true,
      }}
    />
            <div className="about-wrapper">
                <h1>About Zach</h1>
                <div className="about-text-container">
                  <div className="centering-div">
                    <p className="about-text">
                          I'm a front-end developer based in Seattle, WA. I have a passion for problem solving
                          and working past obstacles with a team. Continuously striving to learn new concepts and
                          incorporate fresh tools. Always ready for a new challenge.
                          <br /><br />
                          Currently working as an intern for a Seattle based start-up.
                      </p>
                  </div>
                </div>
              <div className="icons-container">
                  <div className="icon-group icon-group-one">
                    <div className="icon-wrapper">
                      <div className="icon-box">
                          <img src={JavascriptLogo} alt="JavascriptLogo" className='picture'/>
                          <h2>JavaScript</h2>
                          <div className="icon-hover"></div>
                      </div>
                    </div>
                    <div className="icon-wrapper">
                      <div className="icon-box">
                          <img src={CSSLogo} alt="CSSLogo" className='picture' />
                          <h2>CSS</h2>
                          <div className="icon-hover"></div>
                      </div>
                    </div>
                    <div className="icon-wrapper">
                      <div className="icon-box">
                          <img src={HTMLLogo} alt="HTMLLogo" className='picture'/>
                          <h2>HTML</h2>
                          <div className="icon-hover"></div>
                      </div>
                    </div>
                  </div>
                  <div className="icon-group icon-group-two">
                    <div className="icon-wrapper">
                      <div className="icon-box">                    
                          <img src={ReactLogo} alt="ReactLogo" className='picture'/>
                          <h2>React</h2>
                          <div className="icon-hover"></div>
                      </div>
                    </div>
                    <div className="icon-wrapper">
                      <div className="icon-box">
                          <img src={GitLogo} alt="GitLogo" className='picture'/>
                          <h2>Git</h2>
                          <div className="icon-hover"></div>
                      </div>
                    </div>
                    <div className="icon-wrapper">
                      <div className="icon-box">
                          <img src={NodeLogo} alt="NodeLogo" className='picture'/>
                          <h2>Node</h2>
                          <div className="icon-hover"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    )
}
