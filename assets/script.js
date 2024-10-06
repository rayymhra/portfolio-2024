const textArray = ["Hi,", "Hola,", "Sawatdee,", "Halo,"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typeWriter = () => {
  const textElement = document.querySelector(".wel");
  const cursorElement = document.querySelector(".cursor");

  if (!isDeleting && charIndex < textArray[textIndex].length) {
    // Typing effect
    currentText += textArray[textIndex].charAt(charIndex);
    textElement.textContent = currentText;
    charIndex++;
    setTimeout(typeWriter, 100); // Typing speed
  } else if (isDeleting && charIndex >= 0) {
    // Deleting effect
    currentText = currentText.substring(0, charIndex);
    textElement.textContent = currentText;
    charIndex--;
    setTimeout(typeWriter, 50); // Deleting speed
  } else {
    // Toggle between typing and deleting
    isDeleting = !isDeleting;

    if (!isDeleting) {
      textIndex = (textIndex + 1) % textArray.length; // Go to the next text
    }

    setTimeout(typeWriter, 500); // Pause between cycles
  }
};

// Start the animation
typeWriter();
