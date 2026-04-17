const container = document.querySelector('#places');
const search = document.querySelector('#search');

let places = [];

async function getData() {
  const res = await fetch('data/places.json');
  places = await res.json();
  display(places);
}

function display(data) {
  container.innerHTML = '';

  data.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name || 'Destination'}" loading="lazy">
      <h3>${p.name}</h3>
      <p>${p.location}</p>
      <p>${p.category}</p>
      <button class="save">❤</button>
    `;

    card.querySelector('.save').addEventListener('click', () => save(p));

    container.appendChild(card);
  });
}

function save(place) {
  let favs = JSON.parse(localStorage.getItem('favs')) || [];

  if (!favs.find(p => p.name === place.name)) {
    favs.push(place);
    localStorage.setItem('favs', JSON.stringify(favs));
  }
}

search.addEventListener('input', e => {
  const value = e.target.value.toLowerCase();
  display(places.filter(p => p.name.toLowerCase().includes(value)));
});

getData();