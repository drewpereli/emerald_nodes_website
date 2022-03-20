import './src/styles/app.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';

const openMobileNavBtn = document.getElementById('open-mobile-nav-btn');
const mobileNav = document.getElementById('mobile-nav');
const content = document.getElementById('content');
const timer = document.getElementById('countdown-timer');

openMobileNavBtn.addEventListener('click', () => {
  mobileNav.classList.add('open');
});

content.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});

const endtime = 'March 29 2022 00:00:00 GMT-0600';

function getTimeRemaining() {
  const total = Date.parse(endtime) - Date.parse(new Date().toString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateTimer() {
  const t = getTimeRemaining();
  timer.innerHTML =
    t.days +
    ' days ' +
    '<br>' +
    t.hours +
    ' hours' +
    '<br>' +
    t.minutes +
    ' minutes' +
    '<br>' +
    t.seconds +
    ' seconds';
  if (t.total <= 0) {
    clearInterval(timeinterval);
  }
}

updateTimer(); // run function once at first to avoid delay

const timeinterval = setInterval(updateTimer, 1000);
