document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.background = "rgb(39 39 42)";
document.body.style.color = "#61dafb";
document.body.style.fontFamily = "'Arial', sans-serif";
document.body.style.fontWeight = 'bold';
document.body.style.fontSize = '48px'
document.body.style.margin = '0'

const clock = document.querySelector('.clock')
clock.style.background = 'rgb(17 24 39)';
clock.style.padding = '20px 40px';
clock.style.borderRadius = '10px';
clock.style.boxShadow = '10px 10px 6px rgb(107 114 128)'


let hours = 0;
let minutes = 0;
let seconds = 0;

const updateClock = () => {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    if (hours === 24) {
        hours = 0;
    }
    document.getElementById('hours').textContent   = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    
}

setInterval(() => {
    updateClock();
},1000)

