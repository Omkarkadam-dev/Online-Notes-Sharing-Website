// This is just a placeholder to show where interactive logic would go

document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', () => {
    alert(`Filter clicked: ${tag.textContent}`);
    // In a real app, you’d filter cards by category here
  });
});
