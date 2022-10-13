import './style.css';
import List from './modules/scoreList.js';
import { postApi } from './modules/api.js';

window.onload = List.renderList();

const form = document.getElementById('form');
const btnRefresh = document.querySelector('.btn-scores-section');

// submit the form
form.addEventListener('submit', (e) => {
  const successMesg = document.querySelector('.success');
  e.preventDefault();
  postApi();
  setTimeout(() => {
    successMesg.textContent = 'data got submitted successfully';
    successMesg.classList.add('active');
  }, 1500);
  setTimeout(() => {
    successMesg.classList.remove('active');
  }, 4000);
});

// refresh the page
btnRefresh.addEventListener('click', () => {
  const ulContainer = document.getElementById('container');
  ulContainer.innerHTML = '';
  List.renderList();
});
