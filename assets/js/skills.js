// SKILLS COUNT UP — skills.js

document.querySelectorAll('.skill-card').forEach(card => {
  const percent = parseInt(card.getAttribute('data-percent'));
  let animation = null;

  card.addEventListener('mouseenter', () => {
    if (animation) cancelAnimationFrame(animation);

    let current = 0;
    const duration = 800;
    const startTime = performance.now();

    function countUp(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * percent);
      card.setAttribute('data-percent', current + '%');

      if (progress < 1) {
        animation = requestAnimationFrame(countUp);
      } else {
        card.setAttribute('data-percent', percent + '%');
        animation = null;
      }
    }

    animation = requestAnimationFrame(countUp);
  });

  // Reset sa original value pag nag-leave
  card.addEventListener('mouseleave', () => {
    if (animation) cancelAnimationFrame(animation);
    animation = null;
    card.setAttribute('data-percent', percent + '%');
  });
});
