const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

function buildParticleConfig(isDark) {
  const color = isDark ? "#7c9ef5" : "#000000";
  return {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 650,
        },
      },
      color: {
        value: color,
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: isDark ? 0.4 : 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
        },
      },
      size: {
        value: 1,
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
        color: color,
        opacity: isDark ? 0.3 : 0.4,
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
  };
}

function initParticles() {
  const isDark =
    document.documentElement.getAttribute("data-theme") === "dark";
  particlesJS("particles-js", buildParticleConfig(isDark));
}

initParticles();

// Reinitialize whenever the theme attribute changes
new MutationObserver(function () {
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }
  initParticles();
}).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
