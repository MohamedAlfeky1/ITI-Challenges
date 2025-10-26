var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("previous");
var slideShowBtn = document.getElementById("slideShow");
var stopBtn = document.getElementById("stop");
var img = document.querySelector(".slide img");

var slideImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
var imagePath = "../../Images/";
var counter = 0;

nextBtn.addEventListener("click", function () {
  if (counter < slideImages.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  img.src = imagePath + slideImages[counter];
});

prevBtn.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
  } else {
    counter = slideImages.length - 1;
  }
  img.src = imagePath + slideImages[counter];
});

var slideInterval;

slideShowBtn.addEventListener("click", function () {
  slideInterval = setInterval(() => {
    if (counter < slideImages.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    img.src = imagePath + slideImages[counter];
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(slideInterval);
  img.src = imagePath + slideImages[counter];
});
