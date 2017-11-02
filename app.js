function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    let delButton = document.createElement('button');

    delButton.innerText = "Delete";

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    toDoList.appendChild(newLi);

    newLi.appendChild(delButton);

    newToDoText.value = "";

    delButton.addEventListener('click', event => {
      toDoList.removeChild(newLi);
    });
  });
}



window.onload = function(){
  onReady();
}
