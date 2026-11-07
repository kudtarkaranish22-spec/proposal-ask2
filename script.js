
// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");

const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const personalMessage = document.getElementById("personal-message");

const letterWindow = document.querySelector(".letter-window");

// Open Envelope
envelope.addEventListener("click", () => {

    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);

});

// NO Button Runs Away + YES Button Grows
let yesScale = 1;

noBtn.addEventListener("mouseenter", () => {

    // Move NO button randomly
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    // Grow YES button
    yesScale += 0.2;

    yesBtn.style.transform = `scale(${yesScale})`;

});

// YES Button Click
yesBtn.addEventListener("click", () => {

    title.textContent = "Yippeeee! ❤️";

    catImg.src = "cat_dance.gif";

    letterWindow.classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

    personalMessage.style.display = "block";

});
