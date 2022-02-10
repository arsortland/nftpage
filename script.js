const playMusic = (() => {
  const mute = document.querySelector(".muteme");
  const audio = document.querySelector("#audio");
  let isPlaying = false;

  mute.addEventListener("click", () => {
    isPlaying ? audio.pause() : audio.play();
  });

  audio.onplaying = () => {
    isPlaying = true;
    mute.textContent = "Pause";
  };
  audio.onpause = () => {
    isPlaying = false;
    mute.textContent = "Play";
  };
})();

const countdowndate = new Date("Feb 20, 2022 12:00:00").getTime();
const interval = setInterval(() => {
  const now = new Date().getTime();
  const between = countdowndate - now;

  const days = Math.floor(between / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((between % (1000 * 60)) / 1000);

  document.querySelector(".timer").textContent =
    " d:" + days + " h:" + hours + " m:" + minutes + " s:" + seconds;

  if (between < 0) {
    clearInterval(interval);
    document.querySelector(".timer").textContent = "PREPARE";
  }
}, 1000);
