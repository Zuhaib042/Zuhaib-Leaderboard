export default class List {
  static renderList = () => {
    const ulContainer = document.getElementById('container');
    const ul = document.createElement('ul');
    const html = `<li class='singleLi'><span>Alex :</span> <span>500</span></li>
    <li class='singleLi'><span>David :</span> <span>600</span></li>
    <li class='singleLi'><span>Zuhaib:</span> <span>700</span></li>`;
    ul.classList.add('scores-list', 'list-none');
    ul.insertAdjacentHTML('beforeend', html);
    ulContainer.appendChild(ul);
  };
}
