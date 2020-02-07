//add an event handler to capture value of input and create new html
//element with chaeckbox, the text and button to delete

let button = document.getElementById('button');
// console.log(button);
// button.addEventListener('click', addToList);
button.onclick = addToList;

let ul = document.getElementById('toDoList');
// let checkedBox = document.querySelector('input[type="checkbox"]');

button.addEventListener('click', deleteItem);

//function to add items to the to do list
function addToList(e) {
  e.preventDefault();
  let item = document.getElementById('toDo').value;
  console.log(item);
  let li = document.createElement('li');
  let checkBox = document.createElement('input');
  checkBox.setAttribute("type", "checkbox");
  let button = document.createElement('button');
  button.innerHTML = "Delete";
  button.setAttribute("id", "delete");
  // let item2 = createTextNode(item);
  ul.appendChild(li);
  li.textContent = item;
  li.appendChild(checkBox);
  li.appendChild(button);
  let checkedBox = document.querySelector('input[type="checkbox"]');
  checkedBox.addEventListener('checked', checkItem);
  }

  function deleteItem(e) {
    e.preventDefault();
    let listItem = document.getElementsByTagName('li');
    let button = document.get
    ul.removeChild(listItem);
  }

  function checkItem(e) {
    e.target.classList.toggle('checked');
  }
