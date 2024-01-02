import taskManager from './localStorage.js';

const uiManager = (() => {
    const taskInput = document.querySelector('.todo-form-task');
    const taskList = document.querySelector('.task-list');

    const createTaskElement = task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = 
        `<input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''}>
        <label for="${task.id}" class="${task.completed ? 'checked' : ''}">${task.name}</label>
        <button class="deleteBtn" data-task-id"${task.id}"><img src="assets/img/trash-can-regular.svg"></button>`;
        taskList.appendChild(taskItem);
        taskListener(taskItem);
    };

    const taskListener = taskItem => {
        const checkbox = document.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', event => {
            event.preventDefault();
            taskManager.markTaskAsDone(Number(event.target.id));
        });

        const deleteButton = document.querySelector('.deleteBtn');
        deleteButton.addEventListener('click', event => {
            event.preventDefault();
            const taskId = Number(event.target.getAttribute('data-task-id'));
            taskManager.deleteTask(taskId);
        });
    };

    const updateTaskElement = taskId => {
        const taskLabel = document.querySelector(`label[for="${task.id}"]`);
        taskLabel.classList.add('completed');
    };

    const refreshTaskList = () => {
        taskList.innerHTML = ''; 
        taskManager.tasks.forEach(task => {
            createTaskElement(task);
        });
    };
    
    return {
        initializeUI() {
            taskManager.loadTasks()
            taskForm.addEventListener('submit', event => {
                event.preventDefault();
                taskManager.addTask(taskInput.value);
                taskInput.value = '';
                refreshTaskList();
            });
            refreshTaskList();
        },
    };

})();
 
export {uiManager, createTaskElement};