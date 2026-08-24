// HOME PAGE JS — home.js

const nameEl = document.getElementById('typedName');
const fullName = 'Choleen Budiao';

function typeName() {
  let index = 0;
  nameEl.textContent = '';

  function type() {
    if (index < fullName.length) {
      nameEl.textContent += fullName.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
}

window.addEventListener('load', () => {
  document.querySelectorAll('.hero .fade-up').forEach(el => {
    el.classList.add('visible');
  });

  setTimeout(typeName, 600);
});
