let next = document.querySelector(".next");
let play = document.querySelector(".audio-b");
let audio = new Audio("audio/music.mp3");
let video = document.getElementById("bg-video");

// Set audio to loop
audio.loop = true;

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

play.addEventListener("click", function () {
  if (audio.paused) {
    // Play audio and video only if the audio is paused (not already playing)
    audio.play();
    video.play();
  }
});
