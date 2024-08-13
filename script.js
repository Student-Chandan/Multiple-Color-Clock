function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const periodElement = document.getElementById("period");

  // Convert to 12-hour format
  const isPM = hours >= 12;
  hours = hours % 12 || 12;

  // Add leading zeros
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Set AM or PM
  periodElement.textContent = isPM ? "PM" : "AM";

  document.getElementById("hoursBox").textContent = hours;
  document.getElementById("minutesBox").textContent = minutes;
  document.getElementById("secondsBox").textContent = seconds;
}
// Update the clock every second
setInterval(updateClock, 1000);
updateClock();

document.getElementById("Box1").addEventListener("click", () => {
  document.querySelector("body").style.background = "#fff";
});
document.getElementById("Box2").addEventListener("click", () => {
  document.querySelector("body").style.background = "red";
});
document.getElementById("Box3").addEventListener("click", () => {
  document.querySelector("body").style.background = "green";
});
document.getElementById("Box4").addEventListener("click", () => {
  document.querySelector("body").style.background = "blue";
});
document.getElementById("Box5").addEventListener("click", () => {
  document.querySelector("body").style.background = "yellow";
});
document.getElementById("Box6").addEventListener("click", () => {
  document.querySelector("body").style.background = "violet";
});
document.getElementById("Box7").addEventListener("click", () => {
  document.querySelector("body").style.background = "pink";
});
document.getElementById("Box8").addEventListener("click", () => {
  document.querySelector("body").style.background = "blueviolet";
});
document.getElementById("Box9").addEventListener("click", () => {
  document.querySelector("body").style.background = "chocolate";
});
document.getElementById("Box10").addEventListener("click", () => {
  document.querySelector("body").style.background = "aqua";
});
document.getElementById("Box11").addEventListener("click", () => {
  document.querySelector("body").style.background = "rgb(10, 205, 240)";
});
document.getElementById("Box12").addEventListener("click", () => {
  document.querySelector("body").style.background = "silver";
});
document.getElementById("Box13").addEventListener("click", () => {
  document.querySelector("body").style.background = "rgb(187, 9, 92)";
});
document.getElementById("Box14").addEventListener("click", () => {
  document.querySelector("body").style.background = "tomato";
});
document.getElementById("Box15").addEventListener("click", () => {
  document.querySelector("body").style.background = "yellowgreen";
});
document.getElementById("Box16").addEventListener("click", () => {
  document.querySelector("body").style.background = "#000";
});
