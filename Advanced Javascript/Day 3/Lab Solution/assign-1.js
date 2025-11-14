let counter = document.querySelector("#counter");
const signform = document.getElementById("timeOutForm");
const inputs = document.querySelectorAll("#timeOutForm input");

let timeOutEvent = new Event("timeOut");

signform.addEventListener("timeOut", function () {
  alert("TimeOut");
  inputs.forEach((input) => {
    input.setAttribute("disabled", true);
  });
});

let interval = setInterval(() => {
  let value = parseInt(counter.textContent);
  value -= 1;
  counter.textContent = `${value} Seconds remaining`;
  if (value === 0) {
    clearInterval(interval);
    signform.dispatchEvent(timeOutEvent);
  }
}, 1000);
