let hor = document.getElementById("hor");
let hours = document.getElementById("hours");
let minute = document.getElementById("minute");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let alarm = document.getElementById("alarm");
let buttonl = document.getElementById("button");

for (let index = 0; index <= 60; index++) {
  let newIndex = String(index);
  let minute_opt = document.getElementById("minute2");
  minute_opt.innerHTML += `<option class="text-dark">${newIndex.padStart(
    2,
    0
  )}<option>`;
}
for (let index = 0; index <= 24; index++) {
  let newIndex = String(index);
  let minute_opt = document.getElementById("hours");
  minute_opt.innerHTML += `<option class="text-dark">${newIndex.padStart(
    2,
    0
  )}<option>`;
}
function update() {
  let date = new Date();
  hor.innerHTML = String(date.getHours()).padStart(2, 0);
  min.innerHTML = String(date.getMinutes()).padStart(2, 0);
  sec.innerHTML = String(date.getSeconds()).padStart(2, 0);
}
let input = document.getElementById("input");

let modal1 = document.querySelector("#modal");
let hourss;
let minutee;
function save() {
  if (hours.value == "" && minutes2 == "") {
    alert();
  } else {
    buttonl.disabled = true;
    alarm.hidden = false;
    hourss = hours.value;
    minutee = minute2.value;
    setTimeout(() => {
      alarm.hidden = true;
    }, 1000);
    startAlarm();
  }
}
let counter;

function startAlarm() {
  let counter = setInterval(function () {
    let date_now = new Date();
    if (hourss == date_now.getHours() && minutee == date_now.getMinutes()) {
      clearInterval(counter, 2000);
      audio.play();
      audio.loop = true;
      display();
    }
  });
}

function stopAlarm() {
  clearInterval(stot);
}
function display() {
  modal1.classList.remove("hidden");
  sett.innerHTML = input.value;
  hor2.innerHTML = hours.value;
  min2.innerHTML = minute2.value;
}
function closes() {
  buttonl.disabled = false;
  stopAlarm();
  modal1.classList.add("hidden");
  audio.pause();
}

let stot = setInterval(startAlarm, 500);

let date = new Date();
hor.innerHTML = date.getHours();
if (hor.innerHTML >= 12) {
  sect.innerHTML = "PM";
}

setInterval(function () {
  update();
}, 500);

let audio = new Audio("./sound/zilla.mp3");
