// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.about-img, .about-content, .contact-info, .contact-form');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const animationPoint = windowHeight / 1.3;
      
      if(elementPosition < animationPoint) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }
  });
};

// Set initial state
document.querySelectorAll('.about-img, .about-content, .contact-info, .contact-form').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you within 24 hours.');
  form.reset();
});