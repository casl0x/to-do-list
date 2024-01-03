let taskData = JSON.parse(localStorage.getItem('data'));

// création de la liste de tâche 
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
        check.setAttribute('id', `${id}-checkbox`);
        task.appendChild(check);
        check.addEventListener('click', (e) => {
            e.state = check.checked
            task.classList.toggle('done')
        });
    
        const itemTitle = document.createElement('p');
        itemTitle.innerText = title;
        itemTitle.classList.add('task-list-item-title');
        itemTitle.setAttribute('id', `${id}-title`);
        task.appendChild(itemTitle);
                
        const itemDescription = document.createElement('p');
        itemDescription.innerText = description;
        itemDescription.classList.add('task-list-item-description');
        itemDescription.setAttribute('id', `${id}-description`);
        task.appendChild(itemDescription);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<img src="./assets/img/trash-can-regular.svg" alt="delete">'
        deleteBtn.classList.add('task-list-item-btn');
        deleteBtn.setAttribute('id', `${id}-deleteBtn`);

        task.appendChild(deleteBtn);
        
        taskList.appendChild(task);
    });
};

export { updateTaskList }