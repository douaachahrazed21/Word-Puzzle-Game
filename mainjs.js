// List of questions and answers for different levels
const levels = [
    { question: "Ce qui ne se ...... pas se perd !", answer: "partage" },
    { question: "Petit à petit l'....... fait son nid", answer: "oiseau" },
    { question: "Rira bien qui rira le ........", answer: "dernier" },
    { question: "Ce qui ne te tue pas te rend plus .......", answer: "fort" },
    { question: "Les apparences sont .........", answer: "trompeuses"},
    { question: "Mieux vaut ....... que jamais", answer: "tard"}
];

// Get current level from localStorage or start at 0
let currentLevel = parseInt(localStorage.getItem("currentLevel") || "0");


// Check if all levels are completed
if (currentLevel >= levels.length) {
    alert("🎉 Félicitations ! Vous avez complété tous les niveaux ! 🎉");
    localStorage.setItem("currentLevel", "0"); // Reset progress
    window.location.href = "index.html"; // Redirect to main menu
}



const question = levels[currentLevel].question;
const answer = levels[currentLevel].answer.toUpperCase();
let currentAnswer = "";

// Display the question
document.querySelector("#question-text").innerHTML = question;

// 1. Create answer slots
const nbrSlot = answer.length;
const slotsContainer = document.querySelector(".answer-slots");
for (let i = 0; i < nbrSlot; i++) {
    const slotElement = document.createElement("div");
    slotElement.className = "slot";
    slotElement.dataset.slotIndex = i;

    slotsContainer.appendChild(slotElement);
    // Add event listener to remove letter
    slotElement.addEventListener("click", function () {
        if (!slotElement.innerHTML) return; // Do nothing if slot is empty

        const letter = slotElement.dataset.letter;
        const buttons = document.querySelectorAll(".letter-btn");

        for (let btn of buttons) {
            if (btn.innerText === letter && btn.classList.contains("used")) {
                btn.classList.remove("used");
                break;
            }
        }

        currentAnswer = currentAnswer.slice(0, -1);
        slotElement.innerHTML = ""; // Clear the slot
    });
}

// 2. Create the letters (button)
const answerLetters = answer.split("");
// Add more random letters
const randomLetters = [];
const rest = 15 - answer.length;
for (let i = 0; i < rest; i++) {
    const l = getRandomLetter();
    randomLetters.push(l);
}

const allLetters = [...answerLetters, ...randomLetters];

// 3. Mix (shuffle) the letters
allLetters.sort(() => Math.random() - 0.5);

const lettersContainer = document.querySelector("#letters-grid");
for (let l of allLetters) {
    const letterBtn = document.createElement("button");
    letterBtn.className = "letter-btn";
    letterBtn.innerText = l;

    // Add event listener for clicking letters
    letterBtn.addEventListener("click", function () {
        if (currentAnswer.length >= answer.length) {
            return;
        }
        currentAnswer += l;
        const slotIndex = currentAnswer.length - 1;

        const slot = document.querySelector(
            `[data-slot-index="${slotIndex}"].slot`
        );
        slot.innerHTML = l;
        slot.dataset.letter = l;

        letterBtn.classList.add("used");

        // Check game status
        if (currentAnswer === answer) {
            localStorage.setItem("currentLevel", currentLevel + 1); // Progress to next level
        
            if (currentLevel + 1 >= levels.length) { // Check if last level is completed
                alert("🎉 Félicitations ! Vous avez complété tous les niveaux ! 🎉");
                localStorage.setItem("currentLevel", "0"); // Reset progress
                window.location.href = "index.html"; // Redirect to main menu
            } else {
                window.location.href = "winpage.html"; // Continue to next level
            }
        } else if (currentAnswer.length === answer.length) {
            localStorage.setItem("currentLevel", currentLevel); // Stay on same level
            window.location.href = "lostpage.html"; // Redirect to lose page
        }
    });

    // Add it to the parent container
    lettersContainer.append(letterBtn);
}

function getRandomLetter() {
    const randomNumber = Math.floor(Math.random() * 26);
    return String.fromCharCode(randomNumber + 65);
}
