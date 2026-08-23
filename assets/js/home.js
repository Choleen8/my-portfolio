// HOME PAGE JS — home.js

const nameEl = document.getElementById('typedName');
const fullName = 'Choleen Budiao';

function typeName() {
  let index = 0;
  nameEl.textContent = '';
  nameEl.classList.remove('done');

  function type() {
    if (index < fullName.length) {
      nameEl.textContent += fullName.charAt(index);
      index++;
      setTimeout(type, 100);
    } else {
      // Typing done — wait 3 seconds then erase
      nameEl.classList.add('done');
      setTimeout(eraseName, 3000);
    }
  }
  type();
}

function eraseName() {
  nameEl.classList.remove('done');
  let text = nameEl.textContent;

  function erase() {
    if (text.length > 0) {
      text = text.slice(0, -1);
      nameEl.textContent = text;
      setTimeout(erase, 60);
    } else {
      // Erased — wait a bit then type again
      setTimeout(typeName, 500);
    }
  }
  erase();
}

window.addEventListener('load', () => {
  document.querySelectorAll('.hero .fade-up').forEach(el => {
    el.classList.add('visible');
  });
  setTimeout(typeName, 600);
});
