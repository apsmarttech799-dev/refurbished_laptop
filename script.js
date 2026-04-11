// Reveal elements on scroll
const revealElements = document.querySelectorAll(
  "section, .product-grid img, .brands img"
);

window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
      el.classList.add("show");
    }
  });
  document.getElementById("leadForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const whatsappMessage =
    `Name: ${name}%0APhone: ${phone}%0ARequirement: ${message}`;

  window.open(`https://wa.me/919289116099?text=${whatsappMessage}`, "_blank");
});
});

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));