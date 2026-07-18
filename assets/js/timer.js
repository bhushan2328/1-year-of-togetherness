const startDate = new Date("2025-07-18T00:00:00");

function updateLoveTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const timer = document.getElementById("loveTimer");

    if (timer) {
        timer.innerHTML =
            `${days} Days 💖 ${hours} Hours 💕 ${minutes} Minutes 💗 ${seconds} Seconds`;
    }
}

setInterval(updateLoveTimer, 1000);
updateLoveTimer();
