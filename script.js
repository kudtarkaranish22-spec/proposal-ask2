
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

    // Random movement of NO button

    const distance = 200;

    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;

    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform =
        `translate(${moveX}px, ${moveY}px)`;


    // YES button grows every time NO escapes

    yesScale += 0.2;

    yesBtn.style.transform = `scale(${yesScale})`;

});


// YES Button Click

yesBtn.addEventListener("click", () => {

    // Change heading

    title.textContent = "Yippeeee! ❤️";


    // Change cat image

    catImg.src = "cat_dance.gif";


    // Add final class

    letterWindow.classList.add("final");


    // Hide buttons

    buttons.style.display = "none";


    // Show proposal date

    finalText.style.display = "block";


    // Show personalised message

    personalMessage.style.display = "block";

});
