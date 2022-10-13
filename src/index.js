import './style.css';
import List from './modules/scoreList.js';
import { postApi } from './modules/api.js';

window.onload = List.renderList();

const form = document.getElementById('form');
const btnRefresh = document.querySelector('.btn-scores-section');

// submit the form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  postApi();
});

// refresh the page
btnRefresh.addEventListener('click', () => {
  const ulContainer = document.getElementById('container');
  ulContainer.innerHTML = '';
  List.renderList();
});
