function createFloatingHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = ["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },10000);
}

setInterval(createFloatingHeart,400);
