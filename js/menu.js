const menuToggle = document.getElementById("mobile-menu-button");
const menuText = menuToggle.querySelector("span");
const nav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  if (nav.classList.contains("mobile-menu-visible")) {
    nav.classList.remove("mobile-menu-visible");
    menuToggle.ariaExpanded = false;
    menuText.textContent = "Expand menu";
  } else {
    nav.classList.add("mobile-menu-visible");
    menuToggle.ariaExpanded = true;
    menuText.textContent = "Close menu";
  }
});
