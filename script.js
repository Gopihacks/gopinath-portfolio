// Set current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle mobile menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
