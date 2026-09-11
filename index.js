let imagePaths = [];
let selectedImage = "";

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    fillImagePaths();
    randomizeImage();
    setupImageInteractions();
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
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    selectedImage = imagePaths[randomIndex];
    updateCardDisplay();
}

// Search for a specific card by index
function searchCard() {
    const searchInput = document.getElementById("search-input").value;
    const index = parseInt(searchInput, 10) - 1; // Adjust for 0-based index
    if (index >= 0 && index < imagePaths.length) {
        selectedImage = imagePaths[index];
        updateCardDisplay();
    }
}

// Update the card display
function updateCardDisplay() {
    const cardImg = document.getElementById("card-img");
    const currentNumber = document.getElementById("current-number");
    currentNumber.textContent = imagePaths.indexOf(selectedImage) + 1;
    cardImg.classList.remove("reveal");
    cardImg.src = selectedImage;
    void cardImg.offsetWidth;
    cardImg.classList.add("reveal");
}

// Fill image paths (mocked for simplicity)
function fillImagePaths() {
    imagePaths = [];
    for (let i = 1; i <= 100; i++) {
        imagePaths.push(`img/card-${i}.png`);
    }
}