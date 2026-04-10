// Import data from .mjs file
import { places } from "../data/places.mjs";

// Select elements
const container = document.getElementById("cards");
const message = document.getElementById("visit-message");

// ===============================
// CREATE CARDS (GRID AREAS FIXED)
// ===============================
places.forEach((place, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // ✅ REQUIRED for grid-template-areas
    card.style.gridArea = "card" + (index + 1);

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button aria-label="Learn more about ${place.name}">Learn More</button>
    `;

    container.appendChild(card);
});


// ==================================
// LOCAL STORAGE VISITOR MESSAGE (FIXED)
// ==================================
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    // First visit
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = now - Number(lastVisit);

    // Convert milliseconds to days
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${days} days ago.`;
    }
}

// Save current visit time
localStorage.setItem("lastVisit", now);