document.addEventListener('DOMContentLoaded', function() {
  const cat = document.getElementById("cat");
  const alive = document.getElementById("alive-cat");
  const deadPath = "M20 20c0-5 8-7 12-2s10 3 10 7-3 5-5 7c0 5-4 7-7 7s-8-2-10-5c-3-5 0-10 0-14z";
  let isAlive = true;

  const flicker = setInterval(() => {
    if (isAlive) {
      alive.setAttribute("d", deadPath);
    } else {
      alive.setAttribute("d", "M32 2c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5zm0 15c9 0 16 7 16 16s-7 16-16 16-16-7-16-16 7-16 16-16zm-6 24c2 3 5 5 6 5s4-2 6-5l6 3c-3 6-9 10-12 10s-9-4-12-10l6-3z");
    }
    isAlive = !isAlive;
  }, 300);

  setTimeout(() => {
    clearInterval(flicker);
    document.getElementById("preloader").style.opacity = 0;
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) preloader.remove();
    }, 1000);
  }, 4500);
});