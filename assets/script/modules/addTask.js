export function addTask(inputBox, taskList){
    const todoBtn = document.querySelector('.todo-form-btn')

    // création des tâches à faire 
    todoBtn.addEventListener('click', (event) => {
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
    });
}