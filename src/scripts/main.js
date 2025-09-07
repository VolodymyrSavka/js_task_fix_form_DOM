'use strict';

const list = document.getElementsByTagName('form');
const all = [...list];

all.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((element) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', `${element.name}idea`);
    element.id = `${element.name}idea`;

    const inputName = element.name;
    let newName = '';

    for (const char of inputName) {
      if (char === char.toUpperCase()) {
        newName += ` ${char}`;
      } else {
        newName += char;
      }
    }

    newName = newName[0].toUpperCase() + newName.slice(1);
    label.textContent = `${newName}`;

    element.placeholder = `${newName}`;

    element.parentElement.insertBefore(label, element);
  });
});
