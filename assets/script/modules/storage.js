import { updateTaskList } from "./task";

const taskManager = () => {
    let currentTask = {};
    const taskData = JSON.parse(localStorage.getItem('data')) || [];

    const addTask = () => {
        const titleTask = document.querySelector('.todo-form-task');
        const descriptionTask = document.querySelector('.todo-form-description');
        const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
        const taskItem = {
            id: `${titleTask.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
            title: titleTask.value,
            description: descriptionTask.value,
        };
        
        if (dataArrIndex === -1) {
            taskData.unshift(taskItem);
        } else {
            taskData[dataArrIndex] = taskItem;
        }
        localStorage.setItem('data', JSON.stringify(taskData))

        updateTaskList();
        reset();
    };

    const taskForm = document.querySelector('.todo-form');
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });

};

export default taskManager;

// const reset = () => {
//     titleTask.value = "";
//     descriptionTask.value = "";
//     taskForm.classList.toggle("hidden");
//     currentTask = {};
// }