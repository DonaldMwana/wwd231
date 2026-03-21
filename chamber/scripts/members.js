const memberDirectory = document.getElementById('member-directory');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

// Fetch members from JSON
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

// Display members as cards
function displayMembers(members) {
    memberDirectory.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;
        memberDirectory.appendChild(card);
    });
}

// Toggle views
gridBtn.addEventListener('click', () => {
    memberDirectory.className = 'grid-view';
});
listBtn.addEventListener('click', () => {
    memberDirectory.className = 'list-view';
});

// Footer dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-mod').textContent = document.lastModified;

// Initialize
loadMembers();