'use strict'


const form = document.getElementById('form');

const alert = document.getElementById('alert');
const bsAlert = new bootstrap.Alert(alert);

form.addEventListener('submit', (e) => {
    alert.hidden = false;
  }, false);
  