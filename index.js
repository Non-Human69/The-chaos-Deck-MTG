let cards = [];
let selectedCard = null;

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    fillCards();
    randomizeImage();
    setupImageInteractions();
    document.getElementById("include-inverted").addEventListener("change", randomizeImage);
});

function setupImageInteractions() {
    const cardImg = document.getElementById("card-img");
    cardImg.addEventListener("click", () => {
        cardImg.classList.remove("pop");
        void cardImg.offsetWidth;
        cardImg.classList.add("pop");
        cardImg.classList.toggle("expanded");
    });
}

// Randomize and display a new card
function randomizeImage() {
    const availableCards = getAvailableCards();
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    selectedCard = availableCards[randomIndex];
    updateCardDisplay();
}

// Search for a specific card by index
function searchCard() {
    const searchInput = document.getElementById("search-input").value;
    const index = parseInt(searchInput, 10) - 1; // Adjust for 0-based index
    const matchingCards = getAvailableCards().filter(card => card.number === index + 1);
    if (matchingCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * matchingCards.length);
        selectedCard = matchingCards[randomIndex];
        updateCardDisplay();
    }
}

// Update the card display
function updateCardDisplay() {
    const cardImg = document.getElementById("card-img");
    const currentNumber = document.getElementById("current-number");
    const cardOrientation = document.getElementById("card-orientation");
    currentNumber.textContent = selectedCard.number;
    cardOrientation.textContent = selectedCard.isInverted ? "Inverted card" : "Normal card";
    cardImg.alt = selectedCard.isInverted ? "Inverted card" : "Random card";
    cardImg.classList.remove("reveal");
    cardImg.src = selectedCard.path;
    void cardImg.offsetWidth;
    cardImg.classList.add("reveal");
}

function getAvailableCards() {
    const includeInverted = document.getElementById("include-inverted").checked;
    return includeInverted ? cards : cards.filter(card => !card.isInverted);
}

// Build the normal and inverted 100-card pools.
function fillCards() {
    cards = [];
    for (let i = 1; i <= 100; i++) {
        cards.push({ number: i, path: `img/card-${i}.png`, isInverted: false });
        cards.push({ number: i, path: `img_invert/card-${i}.png`, isInverted: true });
    }
}