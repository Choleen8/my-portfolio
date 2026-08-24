// HOME PAGE JS — home.js

window.addEventListener('load', () => {

  const nameEl = document.getElementById('typedName');
  const fullName = 'Choleen Budiao';
  let index = 0;

  // Show hero animation
  document.querySelectorAll('.hero .fade-up').forEach(el => {
    el.classList.add('visible');
  });

  // Type name one letter at a time
  function typeName() {
    if (index < fullName.length) {
      nameEl.textContent += fullName[index];
      index++;
      setTimeout(typeName, 100);
    }
  }

  // Start typing once
  setTimeout(typeName, 600);

});
