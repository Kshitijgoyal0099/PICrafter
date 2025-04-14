import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#faf9f6" }, // Change to match your theme
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
          color: { value: "#f7ce03" },
          links: {
            color: "#f7ce03",
            distance: 130,
            enable: true,
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            outModes: "bounce",
          },
          number: {
            value: 100,
            density: { enable: true, area: 600 },
          },
          opacity: { value: 0.8 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 6 } },
        },
        detectRetina: true,
      }}
    />
  );
}
