let btnAdd = document.getElementById('btnAdd');
let textAdd = document.getElementById('textAdd');
let grid = document.getElementById('grid');
const data = [];

btnAdd.addEventListener('click', add);

function add() {
  let li = document.createElement('li');
  let removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'SİL';
  removeBtn.className = 'removeBtn'
  li.className = 'listText';
  li.innerHTML = `${textAdd.value} `;
  li.appendChild(removeBtn);
  
  grid.appendChild(li);
  data.push(li);
  console.log(data);
  textAdd.value = '';
}
