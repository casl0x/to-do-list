import { reset } from "./UI.js";

export const taskForm = document.querySelector('.todo-form');
export const titleTask = document.querySelector('.todo-form-task');
export const descriptionTask = document.querySelector('.todo-form-description');
const taskList = document.querySelector('.task-list');

const taskManager = () => {
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
                `<div class="task-list-item" id="${id}">
                    <input type="checkbox">
                    <p class="task-list-item-title">${title}</p>
                    <p class="task-list-item-description">${description}</p>
                    <button onclick="editTask(this)" type="button" class="task-list-item-btn"><img src="assets/img/pen-solid.svg" alt="edit button"></button>
                    <button onclick="deleteTask(this)" type="button" class="task-list-item-btn"><img src="assets/img/trash-can-regular.svg" alt="delete button"></button>
                </div>`
        ); 
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });
};

export default taskManager;