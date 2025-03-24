// Load Particles.js
document.body.insertAdjacentHTML('afterbegin', '<div id="particles-js"></div>');
let particlesScript = document.createElement('script');
particlesScript.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
particlesScript.onload = () => {
  particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/particles.js/particles.json');
};
document.body.appendChild(particlesScript);

// Stars Animation
for (let i = 0; i < 200; i++) {
  const star = document.createElement('div');
  star.className = 'stars';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(star);
}
