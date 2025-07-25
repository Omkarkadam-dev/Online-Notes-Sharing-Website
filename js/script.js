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


// Scroll animation without IntersectionObserver
window.addEventListener('scroll', revealSteps);

function revealSteps() {
  const cards = document.querySelectorAll('.step-card');
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 150); // delay per card
    }
  });
}

// Trigger once on page load
revealSteps();


// Scroll animation
window.addEventListener('scroll', showNotes);

function showNotes() {
  const cards = document.querySelectorAll('.note-card');
  const trigger = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 100); // delay effect
    }
  });
}

// Show on load
showNotes();

// Button Action
function viewAllNotes() {
  alert("Redirecting to all notes page... (functionality coming soon)");
}
