// Initialize particles.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // Number of particles
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Particles color (white)
    },
    shape: {
      type: "circle", // Default circle shape
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.8, // Regular opacity
      random: true,
    },
    size: {
      value: 2.5, // Regular size for non-hovered particles
      random: true,
    },
    line_linked: {
      enable: false, // Disable connecting lines
    },
    move: {
      enable: true,
      speed: 0.6, // Slow movement for a relaxed feel
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble", // Use bubble effect for shine on hover
      },
      onclick: {
        enable: true,
        mode: "repulse", // Particles repel on click
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200, // Range within which particles react on hover
        size: 2.5, // Keep the size the same, no growth
        duration: 1, // Duration of the shine effect
        opacity: 1, // Full opacity for shining effect
        speed: 1, // Speed of the effect transition
      },
      repulse: {
        distance: 150,
        duration: 0.4,
      },
    },
  },
  retina_detect: true,
});