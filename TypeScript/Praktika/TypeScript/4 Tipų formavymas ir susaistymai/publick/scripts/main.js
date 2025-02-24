"use strict";
const count = document.querySelector('#count');
const decrBtn = document.querySelector('#decr');
decrBtn.addEventListener('click', () => {
    if (typeof count.textContent === 'number') {
        count.textContent--;
    }
});
