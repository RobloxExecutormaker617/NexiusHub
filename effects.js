// Insert particles.js container
document.body.insertAdjacentHTML('afterbegin', '<div id="particles-js"></div>');

// Load particles.js library
let particlesScript = document.createElement('script');
particlesScript.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
particlesScript.onload = () => {
  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#00ff00" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#00ff00", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 6, "out_mode": "out" }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      },
      "modes": {
        "repulse": { "distance": 200, "duration": 0.4 },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });
};
document.body.appendChild(particlesScript);

// Footer text cycling
const footerTexts = ["Dominus Script Hub", "Join Our Discord!", "Chat Now!"];
let index = 0;
setInterval(() => {
  document.getElementById('footer').innerText = footerTexts[index];
  index = (index + 1) % footerTexts.length;
}, 3000);
