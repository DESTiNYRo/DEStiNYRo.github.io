const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {
  // Add shadow/border when scrolling past top
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Highlight active section
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60; // adjust offset for navbar height
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
