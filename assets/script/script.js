const inputBox = document.querySelector('.todo-form-task')
const todoBtn = document.querySelector('.todo-form-btn')
const taskList = document.querySelector('.task-list')

// création des tâches à faire 
todoBtn.addEventListener('click', addTask);
function addTask(event){
    event.preventDefault();

    if(inputBox.value === ''){
        alert("Écrit la tâche à faire !");
    } else {
        const task = document.createElement('li');
        task.classList.add('task-todo');

        const check = document.createElement('input');
        check.type = 'checkbox';
        check.classList.add('task-todo-check');
        task.appendChild(check);

        const label = document.createElement('label');
        label.innerText = inputBox.value;
        label.classList.add('task-todo-elem')
        task.appendChild(label);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<img src="./assets/img/trash-can-regular.svg" alt="delete">'
        deleteBtn.classList.add('task-todo-deletebtn')
        task.appendChild(deleteBtn);

        taskList.appendChild(task);
    }
    inputBox.value = "";
}

taskList.addEventListener("click", (e) => {
    const item = e.target;

    // supprimer la tâche 
    if (item.classList[0] === 'task-todo-deletebtn'){
        const taskList = item.parentElement;
        taskList.remove();
    };

    // barrer la tâche cochée 
    if (item.classList[0] === 'task-todo-check'){
        const taskList = item.parentElement;
        taskList.classList.toggle('done');
    };
});

function saveLocal (taskList) {
    let todos;
    if (localStorage.getItem["todos"] === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(taskList);
    localStorage.setItem('todos', JSON.stringify(todos));
}
