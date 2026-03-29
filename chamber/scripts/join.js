// timestamp
document.addEventListener("DOMContentLoaded", () => {

document.querySelector("#timestamp").value =
new Date().toISOString();

// autofocus
document.querySelector("#fname").focus();

});

// modals
const links = document.querySelectorAll("[data-modal]");
const closes = document.querySelectorAll(".close");

links.forEach(link => {
link.addEventListener("click", e => {
e.preventDefault();
document.getElementById(link.dataset.modal).showModal();
});
});

closes.forEach(btn => {
btn.addEventListener("click", () => {
btn.closest("dialog").close();
});
});

// ESC key support
document.addEventListener("keydown", e => {
if (e.key === "Escape") {
document.querySelectorAll("dialog").forEach(d => d.close());
}
});