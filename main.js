const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

function setMenu(open) {
  links.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Cerrar" : "Menú";
}

toggle.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
links.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});
addEventListener("scroll", () => nav.classList.toggle("is-stuck", scrollY > 8), { passive: true });

document.getElementById("year").textContent = new Date().getFullYear();

// Al terminar el 15 de diciembre (hora de Lima) la tarjeta deja de invitar a postular.
const call = document.getElementById("convocatoria");
if (Date.now() > new Date(`${call.dataset.until}T23:59:59-05:00`).getTime()) {
  call.hidden = true;
  document.getElementById("convocatoriaFin").hidden = false;
}
