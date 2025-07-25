function scrollToNotes() {
  document.getElementById('notes').scrollIntoView({ behavior: 'smooth' });
}


// Animate features when they enter viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});
