const openSelect = document.querySelector('.openSelect');
const select = document.querySelector('.select');
const actualTask = document.getElementById('actualTask');



openSelect.addEventListener('click', () => {
  select.classList.toggle('visible');
});

const timerText = document.getElementById("timerText");
const circle = document.querySelector(".progressRingCircle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;  // começa vazio

function setProgress(percent) {
  const offset = circumference * (percent - 1);
  circle.style.strokeDashoffset = offset;
}




let interval = 5 * 60;
let totalTime = 25 * 60;
let segundosTotais = totalTime;
const focusTime = document.getElementById('focusTime');
const intervalTime = document.getElementById('intervalTime');
let minutos = totalTime / 60;
let minutosInterval = interval / 60;

focusTime.innerHTML = "&nbsp; " + minutos + " &nbsp;";
intervalTime.innerHTML = "&nbsp; " + minutosInterval + " &nbsp;";


updateTimerText(segundosTotais);
setProgress(1);
circle.style.stroke = "rgb(11, 151, 69)";

function iniciarTimer(duracaoEmSegundos) {
  clearInterval(interval);
  let timeLeft = duracaoEmSegundos;
  totalTime = duracaoEmSegundos;

  updateTimerText(timeLeft);
  setProgress(1);
  circle.style.stroke = "rgb(11, 151, 69)";

  interval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(interval);
      timerText.textContent = "00:00";
      setProgress(0);
      circle.style.stroke = "red";
      return;
    }

    updateTimerText(timeLeft);
    const progresso = timeLeft / totalTime;
    setProgress(progresso);
  }, 1000);
}


function updateTimerText(secondsLeft) {
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  timerText.textContent = `${minutes}:${seconds}`;
}


const focusElements = document.querySelectorAll('.focus');
const intervalElements = document.querySelectorAll('.interval')

focusElements.forEach((focus) => {
  focus.addEventListener('click', () => {
    const focusContent = focus.textContent.trim();
    const [min, sec] = focusContent.split(":").map(Number);
     totalTime = min * 60 + sec;

    updateTimerText(totalTime);
    setProgress(1);
    circle.style.stroke = "rgb(11, 151, 69)";

    focusTime.innerHTML = "&nbsp; " + totalTime/60 + " &nbsp;";
  });
});

intervalElements.forEach((intervalEl) => {
  intervalEl.addEventListener('click', () => {
    const intervalContent = intervalEl.textContent.trim();
    const [min, sec] = intervalContent.split(":").map(Number);
    intervaloEmSegundos = min * 60 + sec;


    intervalTime.innerHTML = "&nbsp; " + intervaloEmSegundos/60 + " &nbsp;";
  });
});


    
    const container = document.getElementById('tittleContainer');
    const start = document.getElementById('start');

container.addEventListener('click', () => {
        iniciarTimer(totalTime);
        start.innerHTML = "Pause";

});

start.innerHTML = "S&nbsp;&nbsp;T&nbsp;&nbsp;A&nbsp;&nbsp;R&nbsp;&nbsp;T";

const options = document.querySelectorAll('.option');
const openOptionsTime = document.getElementById('openOptionsTime');

const hiddenElements = [
    document.getElementById('buttonsStudy'),
    document.getElementById('buttonsInterval'),
    document.getElementById('focusText'),
    document.getElementById('intervalText')
];




openOptionsTime.addEventListener('click', () => {
    hiddenElements.forEach(el => {
        el.classList.toggle('visible');
})

});

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => {
      opt.style.color = "white"; 
    });
    option.style.color = "rgb(64, 231, 134)"; 
    select.classList.remove('visible');
    actualTask.innerHTML = option.textContent.trim();
    actualTask.style.color = "rgb(64, 231, 134)";
  });
});

const textArea = document.getElementById('contentText');
const register = document.getElementById('register');


register.addEventListener('click', () => {
    const typedText = textArea.value.trim();

    if(typedText !== "") {
      const newOption = document.createElement('li');
      newOption.textContent = typedText;
      newOption.id = 'option';
      newOption.classList.add('option');
      select.appendChild(newOption);

      textArea.value = "";
    }
  
})











