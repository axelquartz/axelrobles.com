// Navbar mobile toggle
window.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.navbar-toggle');
  const links = document.querySelector('.navbar-links');
  const body = document.body;
  
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      this.classList.toggle('active');
      links.classList.toggle('active');
      
      // Update ARIA attributes
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      
      // Prevent body scrolling when menu is open
      if (links.classList.contains('open')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (links.classList.contains('open') && 
          !links.contains(event.target) && 
          !toggle.contains(event.target)) {
        links.classList.remove('open');
        toggle.classList.remove('active');
        links.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      }
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
