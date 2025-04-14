import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackgroundDark() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-dark"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#0d1117" }, // Dark background
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#ffffff" }, // White particles
          links: {
            color: "#00cfff", // Aqua-like link color
            distance: 130,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            outModes: "bounce",
          },
          number: {
            value: 90,
            density: { enable: true, area: 600 },
          },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
