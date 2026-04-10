import { places } from "../data/places.mjs";

// Elements
const container = document.getElementById("cards");
const message = document.getElementById("visit-message");

// =========================
// CREATE CARDS
// =========================
places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img 
                src="${place.image}" 
                alt="${place.name} attraction in Johannesburg"
                loading="lazy"
                width="300"
                height="200">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button aria-label="Learn more about ${place.name}">
            Learn More
        </button>
    `;

    container.appendChild(card);
});


// =========================
// VISITOR MESSAGE (LOCAL STORAGE)
// =========================
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - Number(lastVisit)) / 86400000);

    if (days < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${days} days ago.`;
    }
}

// Save visit time
localStorage.setItem("lastVisit", now);