const colorPicker = document.getElementById("canvasColor");
const applyBtn = document.getElementById("applyChangesBtn");
const numberOfCircles = document.getElementById("numberOfCircles");
numberOfCircles.value = 1;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

applyBtn.addEventListener("click", () => {
  const canvasColor = colorPicker.value;
  const circlesNumbers = numberOfCircles.value || 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < circlesNumbers; i++) {
    let randomXAxis = Math.random() * canvas.width;
    let randomYAxis = Math.random() * canvas.height;
    let randomRadius = Math.random() * 50 + 10;
    ctx.beginPath();
    ctx.arc(randomXAxis, randomYAxis, randomRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = canvasColor;
    ctx.stroke();
  }
});
