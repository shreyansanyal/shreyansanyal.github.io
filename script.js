// Typewriter Effect
const typewriterText = "Hi, I'm Shreyan!";
const typewriterElement = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
  if (i < typewriterText.length) {
    typewriterElement.innerHTML += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 260);
  }
}

typeWriter();

// Particles.js Background
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded');
});