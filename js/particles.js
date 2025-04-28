const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // Number of particles
      density: {
        enable: true,
        value_area: 650,
      },
    },
    shape: {
      type: "circle", // Shape of the particles
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5, // Particle opacity
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
      },
    },
    size: {
      value: 1, // Particle size
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 0.1,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onHover: {
        enable: !isMobile,
        mode: "grab",
      },
      onClick: {
        enable: !isMobile,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 20,
        duration: 0.5,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 250,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
