document.addEventListener("DOMContentLoaded", function() {
  let music = document.getElementById("backgroundMusic");
  let button = document.getElementById("musicButton");

  button.addEventListener("click", function() {
      if (music.paused) {
          music.play();
          button.textContent = "⏸";
      } else {
          music.pause();
          button.textContent = "🎶";
      }
  });
});
