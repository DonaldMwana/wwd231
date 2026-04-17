const container = document.querySelector('#favorites');

const favs = JSON.parse(localStorage.getItem('favs')) || [];

if (!favs.length) {
  container.innerHTML = '<p>No favorites saved yet.</p>';
} else {
  container.innerHTML = favs.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.location}</p>
    </div>
  `).join('');
}