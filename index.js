document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved user preference, if any
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Listen for toggle changes
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });


    const preloader = document.getElementById('preloader');
    const particle = document.getElementById('particle');
    const particleMotion = document.getElementById('particle-motion');
    const clubLogo = document.getElementById('club-logo');
    
    // Speed up the particle over time
    let duration = 4;
    let speedInterval = setInterval(() => {
      duration *= 0.9;
      if (duration < 0.3) {
        clearInterval(speedInterval);
        burstIntoLogo();
      } else {
        particleMotion.setAttribute('dur', duration + 's');
      }
    }, 800);
      
      // Hide preloader after animation
      setTimeout(() => {
        anime({
          targets: '#preloader',
          opacity: 0,
          duration: 500,
          complete: () => {
            preloader.style.display = 'none';
          }
        });
      }, 1500);
    })
    window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  const minDisplayTime = 1500; // in ms

  const start = performance.now();

  requestAnimationFrame(function check(now) {
    const elapsed = now - start;
    if (elapsed >= minDisplayTime) {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 600);
    } else {
      requestAnimationFrame(check);
    }
  });
});