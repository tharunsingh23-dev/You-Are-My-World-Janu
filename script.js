function startJourney() {
  document.querySelector(".intro").style.display = "none";
  reveal("timeline");
  reveal("her", 1500);
  reveal("us", 3000);
  reveal("final", 4500);
}

function reveal(id, delay = 0) {
  setTimeout(() => {
    document.getElementById(id).classList.remove("hidden");
  }, delay);
}

/*
Hidden truth — only for the curious

const paneerButterMasala = {
  dish: "Paneer Butter Masala",
  truth: "He was fine",
  lie: "I pretend it's spicy for me too",
  reason: "Because she shouldn't feel it alone"
};
*/
let playing = false;

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (!playing) {
    music.play();
  } else {
    music.pause();
  }
  playing = !playing;
}
