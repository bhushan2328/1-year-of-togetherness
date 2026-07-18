

/* ===========================
   Minute Celebration Popup
=========================== */

if (window.location.pathname.endsWith("our-time.html")) {

    const minuteMessages = [
        "🌹 Another beautiful minute with you... ❤️",
        "💖 Every minute with you becomes another beautiful memory.",
        "✨ Time flies when I'm with you. ❤️",
        "🌹 I could stay with you forever.",
        "❤️ Thank you for spending these moments with me."
    ];

    const minutePopup = document.createElement("div");
    minutePopup.className = "minute-popup";
    minutePopup.innerHTML = `
        <span class="heart">❤️</span>
        <p></p>
    `;

    document.body.appendChild(minutePopup);

    let minutesStayed = 0;

    function showMinutePopup(message) {
        minutePopup.querySelector("p").textContent = message;
        minutePopup.classList.add("show");

        setTimeout(() => {
            minutePopup.classList.remove("show");
        }, 10000);
    }

    setInterval(() => {
        minutesStayed++;

        const message =
            minutesStayed <= minuteMessages.length
                ? minuteMessages[minutesStayed - 1]
                : "🌹 Another beautiful minute together... ❤️";

        showMinutePopup(message);

    }, 60000);
}


/* ===========================
   Every Second With You Counter
=========================== */

if (window.location.pathname.endsWith("our-time.html")) {

    const relationshipDate = new Date(2025, 6, 19, 0, 0, 0);

    function updateRelationshipTimer() {

        const now = new Date();

        let years = now.getFullYear() - relationshipDate.getFullYear();
        let months = now.getMonth() - relationshipDate.getMonth();
        let days = now.getDate() - relationshipDate.getDate();

        if (days < 0) {
            months--;
            const previousMonth = new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            ).getDate();
            days += previousMonth;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const diff = now - relationshipDate;

        const totalSeconds = Math.floor(diff / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);

        const weeks = Math.floor(days / 7);
        const remainingDays = days % 7;

        const hours = totalHours % 24;
        const minutes = totalMinutes % 60;
        const seconds = totalSeconds % 60;

        document.getElementById("years").textContent = years;
        document.getElementById("months").textContent = months;
        document.getElementById("weeks").textContent = weeks;
        document.getElementById("days").textContent = remainingDays;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateRelationshipTimer();

    setInterval(updateRelationshipTimer, 1000);
}


/* ===========================
   Loader
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();
        }, 1000);

    }, 10000);

});

