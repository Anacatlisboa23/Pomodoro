// Variáveis Globais
const bells = new Audio("./mixkit-happy-bells-notification-937.wav/bell.wav");
const startBtn = document.querySelector(".btn-start");
const session = document.querySelector(".minutes");
const secondDiv = document.querySelector(".seconds"); 

let myInterval;
let state = true;
let totalSeconds; 

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent);

    if (state) {
        state = false;
        totalSeconds = sessionAmount * 60; 

        const updateSeconds = () => {
            totalSeconds--;

            let minutesLeft = Math.floor(totalSeconds / 60);
            let secondsLeft = totalSeconds % 60;

            // Formatação com dois dígitos
            secondDiv.textContent = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
            session.textContent = `${minutesLeft}`;

            // Quando o tempo acaba
            if (totalSeconds <= 0) {
                bells.play();
                clearInterval(myInterval);
                state = true; // Permite iniciar novamente
            }
        };

        myInterval = setInterval(updateSeconds, 1000);
    } else {
        alert("O timer já está a correr!");
    }
};

startBtn.addEventListener("click", appTimer);