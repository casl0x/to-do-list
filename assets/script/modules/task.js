// ajouter la liste de tâche 
const updateTaskList = () => {
    const taskList = document.querySelector('.task-list');

    taskList.innerHTML = '';
    taskData.forEach(({id, title, description}) => { 
        const task = document.createElement('li');
        task.classList.add('task-list-item');
        task.id = id;
        
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.classList.add('task-todo-check');
        task.appendChild(check);
        check.addEventListener('click', (e) => {
            e.state = check.checked
            task.classList.toggle('done')
        });
    
        const itemTitle = document.createElement('p');
        itemTitle.innerText = title;
        itemTitle.classList.add('task-list-item-title');
        task.appendChild(itemTitle);
                
        const itemDescription = document.createElement('p');
        itemDescription.innerText = description;
        itemDescription.classList.add('task-list-item-description');
        task.appendChild(itemDescription);
    
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<img src="./assets/img/trash-can-regular.svg" alt="delete">'
        deleteBtn.classList.add('task-list-item-btn');
        task.appendChild(deleteBtn);
        
        taskList.appendChild(task);
    });
};
    
// supprimer une tache
const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    
    localStorage.setItem("data", JSON.stringify(taskData))
}

export {updateTaskList, deleteTask}