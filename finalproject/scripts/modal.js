export function showModal(p) {
  const modal = document.querySelector('#modal');

  modal.innerHTML = `
    <h2>${p.name}</h2>
    <img src="${p.image}" style="width:100%">
    <p>${p.description}</p>
    <button onclick="this.closest('dialog').close()">Close</button>
  `;

  modal.showModal();
}