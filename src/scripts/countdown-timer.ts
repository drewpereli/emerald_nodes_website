const endtime = 'March 29 2022 17:00:00 GMT-0500';

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

function updateTimer(timer: Element) {
  const { days, hours, minutes, seconds, total } = getTimeRemaining();

  const valsToUpdate = { days, hours, minutes, seconds };

  Object.entries(valsToUpdate).forEach(([key, val]) => {
    const el = timer.querySelector(`[data-component="${key}"]`);

    if (!el) return;

    el.innerHTML = String(val);
  });

  if (total <= 0) {
    clearInterval(timeInterval);
  }
}

let timeInterval: NodeJS.Timeout;

export default function startCountdownTimer() {
  const timer = document.querySelector('.countdown-timer');

  if (!timer) return;

  updateTimer(timer); // run function once at first to avoid delay

  timeInterval = setInterval(() => updateTimer(timer), 1000);
}
