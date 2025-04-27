// Smooth scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Contact form alert
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for contacting us! We'll get back to you soon.");
    form.reset();
  });
  