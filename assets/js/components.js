/* ==========================================
   Our First Anniversary
   Components.js
   ========================================== */

const chapters = [
  { title: "Welcome", file: "index.html" },
  { title: "Our Story", file: "our-story.html" },
  { title: "Timeline", file: "timeline.html" },
  { title: "Our Memories", file: "our-memories.html" },
  { title: "A Letter to You", file: "letter.html" },
  { title: "Why I Love You", file: "why-i-love-you.html" },
  { title: "A Little Surprise", file: "surprise.html" },
  { title: "Our Journey", file: "our-journey.html" },
  { title: "Forever & Always", file: "forever.html" }
];

document.addEventListener("DOMContentLoaded", () => {

    const chapter = parseInt(document.body.dataset.chapter || "0");

    createHeader(chapter);
    createNavigation(chapter);
    createFooter();
    createMusicButton();

});

/* ==========================
   HEADER
========================== */

function createHeader(chapter){

    const header = document.getElementById("header");

    if(!header) return;

    header.innerHTML = `
        <header class="site-header">

            <div class="chapter-progress">
                ❤️ Chapter ${chapter + 1} of ${chapters.length}
            </div>

            <h1 class="glow">
                Our First Anniversary
            </h1>

        </header>
    `;

}

/* ==========================
   FOOTER
========================== */

function createFooter(){

    const footer = document.getElementById("footer");

    if(!footer) return;

    footer.innerHTML = `
        <footer class="site-footer">

            <p>
                Forever Yours,<br>
                <strong>Bhushan ❤️</strong>
            </p>

        </footer>
    `;

}

/* ==========================
   NAVIGATION
========================== */

function createNavigation(chapter){

    const nav = document.getElementById("navigation");

    if(!nav) return;

    let previous = "";
    let next = "";

    if(chapter > 0){

        previous = `
        <a class="nav-btn"
           href="${chapters[chapter-1].file}">
           ← ${chapters[chapter-1].title}
        </a>
        `;

    }

    if(chapter < chapters.length-1){

        next = `
        <a class="nav-btn"
           href="${chapters[chapter+1].file}">
           ${chapters[chapter+1].title} →
        </a>
        `;

    }

    nav.innerHTML = `
        <div class="chapter-nav">

            ${previous}

            ${next}

        </div>
    `;

}

/* ==========================
   MUSIC BUTTON
========================== */

function createMusicButton(){

    if(document.getElementById("musicButton"))
        return;

    const button = document.createElement("button");

    button.id = "musicButton";

    button.className = "music-btn";

    button.innerHTML = "🎵";

    document.body.appendChild(button);

}
