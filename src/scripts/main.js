'use strict';

const list = document.getElementsByTagName('form');
const all = [...list];

all.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((element) => {
    const label = document.createElement('label');

    label.className = 'field-label';

    let inputId = element.id;

    if (!element.id) {
      inputId = `${element.name}idea`;
      element.id = inputId;
    }
    label.setAttribute('for', inputId);

    const inputName = element.name;
    let newName = '';
    let previousChar = '';

    for (const char of inputName) {
      if (
        char === char.toUpperCase() &&
        previousChar !== ' ' &&
        newName !== ''
      ) {
        newName += ` ${char}`;
      } else if (char === '_' || char === '-') {
        newName += ' ';
      } else {
        newName += char;
      }
      previousChar = char;
    }

    newName = newName[0].toUpperCase() + newName.slice(1);
    label.textContent = `${newName}`;

    element.placeholder = `${newName}`;

    element.parentElement.insertBefore(label, element);
  });
});
