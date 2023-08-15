const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".navLink");
const navbar = document.querySelector("nav");

const sections = document.querySelectorAll("section");
const navLinksAnchor = document.querySelectorAll("header nav a");

// Menu Hamburger Logic
const menuActive = () => {
  if (navbar.classList.contains("-right-[100vw]")) {
    navbar.classList.remove("-right-[100vw]");
    navbar.classList.add("right-0");
    hamburger.innerHTML = ` <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M6 18L18 6M6 6l12 12"
  />`;
  } else {
    navbar.classList.remove("right-0");
    navbar.classList.add("-right-[100vw]");
    hamburger.innerHTML = `<path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  />`;
  }
};
navLinks.forEach((link) => {
  link.addEventListener("click", menuActive);
});

// Menu Auto React Logic

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offSet = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let secId = sec.getAttribute("id");

    if (top >= offSet && top < offSet + height) {
      navLinksAnchor.forEach((anchors) => {
        anchors.classList.remove("active");
        document
          .querySelector(`header nav a[href*= ${secId}]`)
          .classList.add("active");
      });
    }
  });
};
