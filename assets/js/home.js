// HOME PAGE JS — home.js

const nameEl = document.getElementById('typedName');
const fullName = 'Choleen Budiao';

let index = 0;

function typeName() {
  if (index < fullName.length) {
    nameEl.textContent += fullName.charAt(index);
    index++;

    setTimeout(typeName, 100);
  } else {
    nameEl.classList.add('done');
  }
}

window.addEventListener('load', () => {
  document.querySelectorAll('.hero .fade-up').forEach(el => {
    el.classList.add('visible');
  });

  setTimeout(typeName, 600);
});
