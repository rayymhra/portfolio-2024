particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80, // Reduce particle count for a more spaced-out feel
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff" // Keep the particles white to resemble stars
      },
      "shape": {
        "type": "circle", // Simple circle shapes for particles
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.8, // Slightly transparent to resemble distant stars
        "random": true, // Randomize opacity for a more natural look
        "anim": {
          "enable": false
        }
      },
      "size": {
        "value": 2.5, // Set a smaller particle size for a subtle effect
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": false // Disable connecting lines for a clean space vibe
      },
      "move": {
        "enable": true,
        "speed": 0.8, // Slower particle movement for a subtle floating effect
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out", // Particles will move outside the canvas and disappear
        "bounce": false,
        "attract": {
          "enable": false
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble" // Slightly increase particle size when hovered
        },
        "onclick": {
          "enable": true,
          "mode": "repulse" // On click, particles will move away slightly
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 200, // Particle expands slightly when hovered
          "size": 4, // Increased size on hover
          "duration": 1, // Effect lasts for 1 second
          "opacity": 0.8,
          "speed": 1
        },
        "repulse": {
          "distance": 150,
          "duration": 0.4
        }
      }
    },
    "retina_detect": true
  });
  