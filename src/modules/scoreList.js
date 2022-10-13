import { getData } from './api.js';

export default class List {
  static renderList = async () => {
    const data = await getData();
    const ulContainer = document.getElementById('container');
    const ul = document.createElement('ul');
    ul.classList.add('scores-list', 'list-none');
    data.result
      .sort((a, b) => b.score - a.score)
      .forEach((dat) => {
        const html = `<li class='singleLi'><span>${dat.user} :</span> <span>${dat.score}</span></li>
        `;
        ul.insertAdjacentHTML('beforeend', html);
      });

    ulContainer.appendChild(ul);
  };
}
