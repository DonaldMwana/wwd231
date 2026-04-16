import { showModal } from './modal.js';
import { saveFavorite } from './storage.js';

let places = [];

async function getData() {
  try {
    const res = await fetch('../data/places.json');
    places = await res.json();
    display(places);
  } catch (err) {
    console.error(err);
  }
}

function display(data) {
  const container = document.querySelector('#places');
  container.innerHTML = '';

  data.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <h3>${p.name}</h3>
      <p>${p.location}</p>
      <p>${p.category}</p>
      <button class="details">Details</button>
      <button class="save">❤</button>
    `;

    card.querySelector('.details').onclick = () => showModal(p);
    card.querySelector('.save').onclick = () => saveFavorite(p);

    container.appendChild(card);
  });
}

document.querySelector('#search').addEventListener('input', e => {
  const value = e.target.value.toLowerCase();
  display(places.filter(p => p.name.toLowerCase().includes(value)));
});

document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    if (cat === "All") display(places);
    else display(places.filter(p => p.category === cat));
  });
});

getData();