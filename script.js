// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fade-in animation on scroll
  const sections = document.querySelectorAll('section');
  
  const fadeInOnScroll = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Initialize
  window.addEventListener('load', () => {
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    fadeInOnScroll();
  });

  // Add to script.js
document.getElementById('surpriseBtn').addEventListener('click', () => {
    document.body.classList.toggle('concert-mode');
    document.getElementById('song').play();
  });


// Typing animation
const phrases = ["Fevita", "Coder", "Singer", "Creator"];
let i = 0, j = 0;
let currentPhrase = [];

function type() {
  if (i < phrases.length) {
    if (j < phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      document.getElementById('dynamic-text').innerHTML = currentPhrase.join('') + '<span class="blink">|</span>';
      j++;
      setTimeout(type, 150);
    } else {
      setTimeout(erase, 1000);
    }
  }
}

function erase() {
  if (j > 0) {
    currentPhrase.pop();
    document.getElementById('dynamic-text').innerHTML = currentPhrase.join('') + '<span class="blink">|</span>';
    j--;
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

type();
  
  window.addEventListener('scroll', fadeInOnScroll);