document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicButton");

    console.log("music:", music);
    console.log("button:", button);

    if (!music || !button) {
        console.error("Missing music or button");
        return;
    }

    button.addEventListener("click", async () => {
        console.log("Button clicked");
        try {
            if (music.paused) {
                await music.play();
                console.log("Playing");
                button.innerHTML = "🔊";
            } else {
                music.pause();
                console.log("Paused");
                button.innerHTML = "🎵";
            }
        } catch (e) {
            console.error("Play failed:", e);
        }
    });
});
