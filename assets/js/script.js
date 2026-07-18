/* ==========================================
   Our First Anniversary
   Main Script
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initStars();
    initPetals();
    initMusic();
    initPageTransition();

});

/* ==========================================
   STARS
   ========================================== */

function initStars(){

    if(document.querySelector(".stars")) return;

    const stars = document.createElement("div");

    stars.className = "stars";

    document.body.prepend(stars);

}

/* ==========================================
   PETALS
   ========================================== */

function initPetals(){

    if(document.querySelector(".petals")) return;

    const petals = document.createElement("div");

    petals.className = "petals";

    document.body.appendChild(petals);

}

/* ==========================================
   MUSIC
   ========================================== */

function initMusic(){

    const button = document.getElementById("musicButton");

    if(!button) return;

    const audio = new Audio(CONFIG.music.file);

    audio.loop = CONFIG.music.loop;

    let playing = false;

    button.addEventListener("click",()=>{

        if(playing){

            audio.pause();

            button.innerHTML="🎵";

        }else{

            audio.play();

            button.innerHTML="⏸";

        }

        playing=!playing;

    });

}

/* ==========================================
   PAGE TRANSITION
   ========================================== */

function initPageTransition(){

    document.querySelectorAll("a").forEach(link=>{

        if(link.target==="_blank") return;

        link.addEventListener("click",(e)=>{

            const href=link.getAttribute("href");

            if(!href) return;

            e.preventDefault();

            document.body.style.opacity="0";

            setTimeout(()=>{

                location.href=href;

            },400);

        });

    });

}

/* ==========================
   Loader
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 17000);

});

/* ==========================
   Stars
========================== */

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    document.body.appendChild(star);

}

/* ==========================
   Petals
========================== */

setInterval(()=>{

    const petal=document.createElement("div");

    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(5+Math.random()*5)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>petal.remove(),10000);

},700);


window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    const music=new Audio("assets/music/song.mp3");

    music.loop=true;

    setTimeout(()=>{

        loader.classList.add("hide");

        music.play().catch(()=>{

            console.log("Autoplay blocked until user interaction.");

        });

    },17000);

});


document.addEventListener("pointermove",(e)=>{

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=e.clientX+"px";

    s.style.top=e.clientY+"px";

    document.body.appendChild(s);

    setTimeout(()=>s.remove(),800);

});

