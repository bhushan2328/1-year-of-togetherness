const music = document.getElementById("bgMusic");

const button = document.createElement("button");
button.id = "musicToggle";
button.innerHTML = "🎵";
document.body.appendChild(button);

button.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        button.innerHTML = "🔊";
    } else {
        music.pause();
        button.innerHTML = "🔇";
    }
});

document.addEventListener("click", () => {
    if (music.paused) {
        music.play().catch(() => {});
        button.innerHTML = "🔊";
    }
}, { once: true });
