// Navbar mobile toggle
window.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.navbar-toggle');
  const links = document.querySelector('.navbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      this.classList.toggle('active');
      links.classList.toggle('active');
    });
  }
});

// Scroll-aware navbar behavior
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.classList.remove('hide');
    return;
  }

  if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }
  
  lastScroll = currentScroll;
});
