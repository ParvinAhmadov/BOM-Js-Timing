const style = document.createElement("style");
style.textContent = `
body{
    display:flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
    background-color: rgb(17 24 39);
    color:white;
    font-family: 'Arial', sans-serif;
    margin: 0;
}
.clock{
    font-size:50px;
    background-color: rgb(31 41 55);
    padding: 15px 45px;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 10px  rgb(243 244 246);
}
`;
document.head.appendChild(style);

const updateClock = ()=>{
    const now = new Date();
    
    const hours = now.getHours().toString().padStart(2, "0");
    document.getElementById('hours').textContent = hours;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    document.getElementById('minutes').textContent = minutes;
    const seconds = now.getSeconds().toString().padStart(2, "0");
    document.getElementById('seconds').textContent = seconds;

   

}

setInterval(() => {
    updateClock();
},100)
