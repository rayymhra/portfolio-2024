// PARTICLE JS
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    // Modify particle size based on scroll position
    const scaleFactor = Math.min(1 + scrollY / 1000, 2); // Maximum scaling is 2x
    const particles = document.querySelectorAll('.particles-js-canvas-el');
  
    particles.forEach(particle => {
      particle.style.transform = `scale(${scaleFactor})`;
    });
  });
  