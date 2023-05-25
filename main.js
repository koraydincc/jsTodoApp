let btnAdd = document.getElementById('btnAdd');
let textAdd = document.getElementById('textAdd');
let grid = document.getElementById('grid');
const data = [];

document.getElementById('btnAdd').addEventListener('click',function(){
   add();
})


function add() {

 

  if (textAdd.value == '') {
      alert('Lütfen yapılacak bir şey ekleyin!')
      return false
   
  } 
  else{
      let li = document.createElement('li');
      let removeBtn = document.createElement('button');
      removeBtn.innerHTML = 'X';
      removeBtn.className = 'removeBtn' 
      
    
      li.className = 'listText';
      li.innerHTML = `${textAdd.value} `;
      li.appendChild(removeBtn);
      
      
      grid.appendChild(li);
      data.push(li);
      removeBtn.addEventListener('click',function () {
         let index = data.indexOf(li)
         if (index !== -1) {
            data.splice(index,1)
         }
         grid.removeChild(li)
       })
   }
  console.log(data);
  textAdd.value = '';
}

