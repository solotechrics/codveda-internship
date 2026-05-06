const mobileToggle = document.querySelector(".fa-bars");
const closeToggle = document.querySelector(".fa-x");
const nav = document.querySelector(".nav-links");

mobileToggle.addEventListener("click", () => {
  nav.classList.add("active");

  mobileToggle.classList.add("hide");
  closeToggle.classList.add("active");
});

closeToggle.addEventListener("click", () => {
  nav.classList.remove("active");

  mobileToggle.classList.remove("hide");
  closeToggle.classList.remove("active");
});
