// Navbar scroll state
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Reveal-on-scroll for sections
const revealTargets = document.querySelectorAll(
  '.split-text, .split-visual, .product-card, .gallery-item, .manifesto-item, .section-head, .quote-content, .cta-content'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  observer.observe(el);
});

// Ember particles
const emberLayer = document.getElementById('embers');
const EMBER_COUNT = 28;
for (let i = 0; i < EMBER_COUNT; i++) {
  const ember = document.createElement('div');
  ember.className = 'ember';
  const size = 2 + Math.random() * 4;
  ember.style.width = `${size}px`;
  ember.style.height = `${size}px`;
  ember.style.left = `${Math.random() * 100}%`;
  ember.style.setProperty('--drift', `${(Math.random() - 0.5) * 120}px`);
  ember.style.animationDuration = `${10 + Math.random() * 14}s`;
  ember.style.animationDelay = `${Math.random() * 18}s`;
  emberLayer.appendChild(ember);
}

// 3D tilt on product cards
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-10px) rotateX(${y * -8}deg) rotateY(${x * 10}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Mobile nav toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
  burger.classList.toggle('active');
});

// Hero parallax smoke
const smokes = document.querySelectorAll('.smoke');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  smokes.forEach((s, i) => {
    s.style.transform = `translateY(${y * (0.1 + i * 0.05)}px)`;
  });
});
