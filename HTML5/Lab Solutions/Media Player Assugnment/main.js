const audio = document.getElementById("audio");
const timeRange = document.getElementById("timeRange");
const volumeRange = document.getElementById("volumeRange");
const currentImage = document.getElementById("currentImage");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

audio.addEventListener("load", function () {
  timeRange.max = audio.duration;
});

audio.addEventListener("timeupdate", function () {
  timeRange.value = audio.currentTime;
});

timeRange.addEventListener("input", () => {
  changeAudioTime();
});

volumeRange.addEventListener("input", () => {
  changeAudioVolume();
});

playBtn.addEventListener("click", () => {
  audioPlay();
});

pauseBtn.addEventListener("click", () => {
  audioPause();
});

stopBtn.addEventListener("click", () => {
  audioStop();
});

function changeAudioTime() {
  audio.currentTime = timeRange.value;
}

function changeAudioVolume() {
  audio.volume = volumeRange.value;
}

function audioPause() {
  audio.pause();
}

function audioPlay() {
  audio.play();
}

function audioStop() {
  audio.pause();
  audio.currentTime = 0;
  timeRange.value = 0;
}

function selectTrack(trackSrc, trackImage) {
  audio.src = trackSrc;
  currentImage.src = trackImage;
  audio.play();
}
