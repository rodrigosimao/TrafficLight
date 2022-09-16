const $lightCircle = document.querySelectorAll('.light-circle');
let lightCounter = 0;

const turnOnLight = () => {
  $lightCircle[lightCounter].className = 'light-circle';
  lightCounter++;

  if (lightCounter > 2) lightCounter = 0;

  const currentLight = $lightCircle[lightCounter];
  currentLight.classList.add(currentLight.getAttribute('color'));
};

setInterval(turnOnLight, 3000);
