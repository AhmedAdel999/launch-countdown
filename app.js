const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const heading = document.querySelector('h1');
const timer = document.querySelector('.timer');

const launchDay = "Jan 30, 2021 00:00:00";
const countDown = new Date(launchDay).getTime();


// To avoid the timer being empty on reload
setTime();

setInterval(setTime, 1000);

function setTime() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const now = new Date().getTime();
  const distance = countDown - now;
  days.innerText = pad(Math.floor(distance / day));
  hours.innerText = pad(Math.floor((distance % day) / hour));
  minutes.innerText = pad(Math.floor((distance % hour) / minute));
  seconds.innerText = pad(Math.floor((distance % minute) / second));
  if (distance == 0) {
    heading.innerHTML = 'Hooooray!';
    timer.style.display = 'none';
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
