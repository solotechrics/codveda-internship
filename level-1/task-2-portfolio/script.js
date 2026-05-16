"use strict";

const navDrawer = document.getElementById("nav-drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const navToggle = document.getElementById("nav-toggle");

// Listen for click on the toggle
navToggle.addEventListener("click", () => {
  navDrawer.classList.toggle("active");
  drawerOverlay.classList.toggle("active");
  navToggle.classList.toggle("active");
});

drawerOverlay.addEventListener("click", () => {
  navDrawer.classList.remove("active");
  drawerOverlay.classList.remove("active");
  navToggle.classList.remove("active");
});
