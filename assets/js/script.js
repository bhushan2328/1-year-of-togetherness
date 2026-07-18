const button = document.getElementById("startStory");

button.addEventListener("click", () => {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.animate([
                {opacity:0,transform:'translateY(60px)'},
                {opacity:1,transform:'translateY(0)'}
            ],{
                duration:900,
                fill:'forwards'
            });

        }

    });

},{threshold:.3});

document.querySelectorAll(".story-card").forEach(card=>{
    observer.observe(card);
});


const gift = document.getElementById("gift");
const message = document.getElementById("secretMessage");

if(gift && message){
    gift.addEventListener("click",()=>{
        gift.style.display="none";
document.querySelector(".gift-text").style.display="none";
message.style.display="block";
    });
}


const startDate = new Date("2024-09-07T00:00:00");

function updateTimer(){

const now = new Date();

const diff = now - startDate;

const totalSeconds = Math.floor(diff/1000);
const totalMinutes = Math.floor(diff/(1000*60));
const totalHours = Math.floor(diff/(1000*60*60));
const totalDays = Math.floor(diff/(1000*60*60*24));
const totalWeeks = Math.floor(totalDays/7);

let years = now.getFullYear()-startDate.getFullYear();
let months = now.getMonth()-startDate.getMonth();

if(months<0){
months+=12;
years--;
}

document.getElementById("years").textContent=years;
document.getElementById("months").textContent=months;
document.getElementById("weeks").textContent=totalWeeks;
document.getElementById("days").textContent=totalDays;
document.getElementById("hours").textContent=totalHours;
document.getElementById("minutes").textContent=totalMinutes;
document.getElementById("seconds").textContent=totalSeconds;

}

updateTimer();
setInterval(updateTimer,1000);


window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loader-hide");

        setTimeout(() => {
            loader.remove();
        }, 1500);

    }, 5000);
});


const particleContainer = document.getElementById("particles");

if (particleContainer) {
    for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = (8 + Math.random() * 8) + "s";
        p.style.animationDelay = (Math.random() * 8) + "s";
        p.style.width = (4 + Math.random() * 6) + "px";
        p.style.height = p.style.width;
        particleContainer.appendChild(p);
    }
}


const petals = document.getElementById("particles");

if(petals){

petals.innerHTML="";

for(let i=0;i<25;i++){

const p=document.createElement("div");

p.className="particle";

p.textContent="🌹";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=(8+Math.random()*8)+"s";

p.style.animationDelay=(Math.random()*8)+"s";

p.style.fontSize=(18+Math.random()*18)+"px";

petals.appendChild(p);

}

}


function createHeartBurst(){

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.textContent="❤️";

heart.style.left=(window.innerWidth/2+(Math.random()*300-150))+"px";

heart.style.top=(window.innerHeight/2+(Math.random()*200-100))+"px";

heart.style.animationDuration=(2+Math.random()*2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000);

}

}

const giftButton=document.getElementById("gift");

if(giftButton){

giftButton.addEventListener("click",createHeartBurst);

}


const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

if(music && musicBtn){

music.volume=0.4;

musicBtn.addEventListener("click",async()=>{

try{

if(music.paused){

await music.play();
musicBtn.textContent="🔊";

}else{

music.pause();
musicBtn.textContent="🎵";

}

}catch(e){
console.log(e);
}

});

}

