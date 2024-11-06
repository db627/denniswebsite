import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";

// Styled component for the Hero section
const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #ffffff;
`;

const ParticlesBackground = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 16px;
  border: 3px solid #ffffff;
  object-fit: cover; /* Ensures the image scales to cover the area without distortion */
  object-position: center; /* Centers the image within the circle */
`;


const HeroAnimation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#1A2332" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          speed: 6,
        },
        number: {
          density: { enable: true },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <HeroContainer>
      {init && (
        <ParticlesBackground
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      
      {/* Hero Content */}
      <HeroContent id="hero">
        <ProfileImage src="./profile.JPG" alt="Profile" /> {/* Update the path to your image */}
        
        <h1 className="text-5xl font-bold mb-4 p-2">Dennis Boguslavskiy</h1>
        
        <p className="text-gray-300 text-xl mb-8 p-2">
          <Typewriter
            words={["Student, Software Developer, Data Analyst, Problem Solver"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </p>
        
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/dennis-boguslavskiy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-blue-500 hover:scale-110 transition-transform duration-200" />
          </a>
          <a
            href="https://github.com/db627"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-white hover:scale-110 transition-transform duration-200" />
          </a>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroAnimation;
