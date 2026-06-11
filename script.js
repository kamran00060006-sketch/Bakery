// Hero text fade-in
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-content");
  heroText.style.opacity = 0;
  heroText.style.transition = "opacity 1.5s ease-in-out";
  setTimeout(() => {
    heroText.style.opacity = 1;
  }, 300);
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
