let btnAdd = document.getElementById('btnAdd');
let textAdd = document.getElementById('textAdd');
let grid = document.getElementById('grid');
let counter = document.getElementById('counter');
let btnRemoveAll = document.getElementById('btnRemoveAll');
let listContainer = document.getElementById('list-container');
let tarih = document.getElementById('date')
let data = [];


zaman()

btnAdd.addEventListener('click', function() {
  if (data.length > 8) {
    alert('Daha fazla yapılacak bir şeyler ekleyemezsiniz.');
    return false;
  }

  add();
});



function add() {
  if (textAdd.value == '') {
    alert('Lütfen yapılacak bir şeyler ekleyin!');
    return false;
  } else {
    let li = document.createElement('li');
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'X';
    removeBtn.className = 'removeBtn';

    li.className = 'listText';
    li.innerHTML = `${textAdd.value} `;
    li.appendChild(removeBtn);

    grid.appendChild(li);
    data.push(li);
    zaman()
    

    counter.innerHTML = `(${data.length})`;

    removeBtn.addEventListener('click', function() {
      let index = data.indexOf(li);
      if (index !== -1) {
        data.splice(index, 1);
        counter.innerHTML = `(${data.length})`;
      }
      
      grid.removeChild(li);
    });
  }
  console.log(data)

  textAdd.value = '';
}

function zaman() {

   let suan = new Date()
   let gun = suan.getDate()
   let ay = suan.getMonth() + 1;
   let yil = suan.getFullYear()

   let formatTarih = `${gun}/${ay}/${yil}`

   tarih.innerHTML = formatTarih;

}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    btnAdd.click();
  }
});
