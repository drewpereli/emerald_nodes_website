export const NODES_APP_LAUNCH_TIME = 'March 29 2022 15:00:00 EDT';
const SWAP_APP_LAUNCH_TIME = 'March 26 2022 10:00:00 PDT';

// const soon = new Date(Date.now() + 3000).toString();
// export const NODES_APP_LAUNCH_TIME = soon;
// const SWAP_APP_LAUNCH_TIME = soon;

export function getTimeRemaining(endTime: string) {
  return Date.parse(endTime) - Date.parse(new Date().toString());
}

function transitionNodes() {
  const elementsToHide = document.querySelectorAll(
    '[data-show-until-nodes-launch]'
  );

  elementsToHide.forEach((el) => {
    (el as HTMLElement).style.display = 'none';
  });

  const elementsToShow = document.querySelectorAll(
    '[data-hide-until-nodes-launch]'
  );

  elementsToShow.forEach((el) => {
    (el as HTMLElement).style.display = '';
  });
}

function transitionSwap() {
  const elementsToHide = document.querySelectorAll(
    '[data-show-until-swap-launch]'
  );

  elementsToHide.forEach((el) => {
    (el as HTMLElement).style.display = 'none';
  });

  const elementsToShow = document.querySelectorAll(
    '[data-hide-until-swap-launch]'
  );

  elementsToShow.forEach((el) => {
    (el as HTMLElement).style.display = '';
  });
}

function transitionNodesIfTime() {
  const total = getTimeRemaining(NODES_APP_LAUNCH_TIME);

  if (total <= 0) {
    transitionNodes();
    return true;
  }

  return false;
}

function transitionSwapIfTime() {
  const total = getTimeRemaining(SWAP_APP_LAUNCH_TIME);

  if (total <= 0) {
    transitionSwap();
    return true;
  }

  return false;
}

function hideNodesElements() {
  document.querySelectorAll('[data-hide-until-nodes-launch]').forEach((el) => {
    (el as HTMLElement).style.display = 'none';
  });
}

function hideSwapElements() {
  document.querySelectorAll('[data-hide-until-swap-launch]').forEach((el) => {
    (el as HTMLElement).style.display = 'none';
  });
}

export default function setupLaunchTransitions() {
  hideNodesElements();
  hideSwapElements();

  const nodesDone = transitionNodesIfTime();

  if (!nodesDone) {
    const nodesInterval = setInterval(() => {
      const doneNow = transitionNodesIfTime();

      if (doneNow) {
        clearInterval(nodesInterval);
      }
    }, 1000);
  }

  const swapDone = transitionSwapIfTime();

  if (!swapDone) {
    const swapInterval = setInterval(() => {
      const doneNow = transitionSwapIfTime();

      if (doneNow) {
        clearInterval(swapInterval);
      }
    }, 1000);
  }
}
