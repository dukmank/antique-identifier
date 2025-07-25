document.querySelectorAll('.accordion-title').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isExpanded = item.classList.contains('expanded');

    item.classList.toggle('expanded');
    button.classList.toggle('active');
  });
});
  const steps = document.querySelectorAll('.hiw-step');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });
steps.forEach(step => observer.observe(step));

  