function onReady(){
  //var toDos = [];
  if(localStorage.getItem("data") != null){
    var toDos = JSON.parse(localStorage.getItem("data"));
  }else{
    var toDos = [];
  }
  const addToDoForm = document.getElementById('addToDoForm');
  let idNum = 0;

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: idNum
    });
    newToDoText.value = '';

    idNum++;

    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const delButton = document.createElement('button');

      checkbox.type = 'checkbox';
      delButton.innerText="Delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delButton);

      delButton.addEventListener('click', event => {
        let newArr = toDos.filter(toDos => toDo.id != toDos.id);
        toDos = newArr;
        renderTheUI();
      });
      checkbox.addEventListener('click', event => {
        toDos.complete = !toDos.complete;
        renderTheUI();
      });
    });
    localStorage.setItem("data",JSON.stringify(toDos));
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function(){
  onReady();
}
