import  uiManager  from "./UIManager";
uiManager;

const taskManager = (() => {
    const taskForm = document.querySelector('.todo-form');
    const titleTask = document.querySelector('.todo-form-task');
    const descriptionTask = document.querySelector('.todo-form-description');
    const taskList = document.querySelector('.task-list');

    const taskData = [];
    let currentTask = {};

    const addTask = () => {
        const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
        const taskItem = {
            id: `${titleTask.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
            title: titleTask.value,
            description: descriptionTask.value,
        };

        if (dataArrIndex === -1) {
            taskData.unshift(taskItem);
        }
        updateTaskList();
        reset();
    };

    const updateTaskList = () => {
        taskList.innerHTML = '';
        taskData.forEach(({id, title, description}) => 
            taskList.innerHTML +=
                `<div class="task" id="${id}">
                    <input type="checkbox">
                    <p>${title}</p>
                    <p>${description}</p>
                    <button onclick="editTask(this)" type="button" class="btn"><img src="assets/img/pen-solid.svg" alt="edit button"></button>
                    <button onclick="deleteTask(this)" type="button" class="btn"><img src="assets/img/trash-can-regular.svg" alt="delete button"></button>
                </div>`
        ); 
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });
})();

export default taskManager;