import { NODES_APP_LAUNCH_TIME, getTimeRemaining } from './launch-transitions';

// const endtime = 'March 29 2022 17:00:00 GMT-0500';
// export const NODES_APP_LAUNCH_TIME = new Date(Date.now() + 5000).toString();

// export function getTimeRemaining(endTime: string) {
//   const total = Date.parse(endTime) - Date.parse(new Date().toString());

//   const seconds = Math.floor((total / 1000) % 60);
//   const minutes = Math.floor((total / 1000 / 60) % 60);
//   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(total / (1000 * 60 * 60 * 24));

//   return {
//     total,
//     days,
//     hours,
//     minutes,
//     seconds,
//   };
// }

function parseTimeRemaining(time: number) {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateTimer(timer: Element) {
  const total = getTimeRemaining(NODES_APP_LAUNCH_TIME);
  const { days, hours, minutes, seconds } = parseTimeRemaining(total);

  const valsToUpdate = { days, hours, minutes, seconds };

  Object.entries(valsToUpdate).forEach(([key, val]) => {
    const el = timer.querySelector(`[data-component="${key}"]`);

    if (!el) return;

    el.innerHTML = String(val);
  });

  if (total <= 0) {
    if (timeInterval) clearInterval(timeInterval);

    return true;
  }

  return false;
}

let timeInterval: NodeJS.Timeout;

export default function startCountdownTimer() {
  const timer = document.querySelector('.countdown-timer');

  if (!timer) return;

  const done = updateTimer(timer); // run function once at first to avoid delay

  if (done) return;

  timeInterval = setInterval(() => updateTimer(timer), 1000);
}
