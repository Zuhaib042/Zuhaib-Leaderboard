import { getData } from './api';
export default class List {
  static renderList = async (dataApi) => {
    const data = await getData();
    const ulContainer = document.getElementById('container');
    const ul = document.createElement('ul');
    const html = `<li class='singleLi'><span>${data.user} :</span> <span>${data.score}</span></li>
    `;
    ul.classList.add('scores-list', 'list-none');
    ul.insertAdjacentHTML('beforeend', html);
    ulContainer.appendChild(ul);
  };
}
