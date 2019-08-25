// APP CONTROLLER

var addList = document.querySelector('.header__task-input--btn');

addList.addEventListener('click', function(e) {
    "use strict"
    e.preventDefault();
        listInterface();
})

  

// UI
function listInterface() {
    var input = document.querySelector('.list-field').value;
    var taskList = document.querySelector('.task-list');
    var listItem = document.createElement('li');
    var txt = document.createTextNode(input);
    var deleteIcon = document.createElement('i');
    var checkedIcon = document.createElement('i');
    if (input === "") {
        alert("Kindly insert your list!");
    } else {
        checkedIcon.className = 'fas fa-check-square'
        deleteIcon.className = 'fas fa-times-circle';
        listItem.appendChild(deleteIcon);
        listItem.appendChild(checkedIcon);
        listItem.append(txt);
        listItem.className = "task-list__item"
        taskList.append(listItem);
        taskList.className = "task-list"
    }

    checkedIcon.addEventListener('click', function() {
        // checkedIcon.style = "color: #47B974";
        checkedIcon.classList.toggle("active");
        listItem.style = "text-decoration: line-through";
    })
    document.querySelector('.list-field').value = "";


}

