document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  const sections = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);

      sections.forEach((sec) => sec.classList.add("hidden"));

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove("hidden");
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });
});

const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
        entry.target.classList.remove("opacity-0");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  animatedSections.forEach((el) => observer.observe(el));
});





