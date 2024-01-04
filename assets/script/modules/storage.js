import { updateTaskList } from "./task.js";

const taskManager = () => {
    let taskData = [];

    document.addEventListener('DOMContentLoaded', () => {
        taskData = JSON.parse(localStorage.getItem('data')) || [];
    })

    // ajout d'une tache dans la stockage
    const addTask = () => {
        const titleTask = document.querySelector('.todo-form-task');
        const descriptionTask = document.querySelector('.todo-form-description');
        const newTask = {
            id: `${titleTask.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
            title: titleTask.value,
            description: descriptionTask.value,
        };
        taskData.push(newTask);
        localStorage.setItem('data', JSON.stringify(taskData));
        updateTaskList();    
    };

    // supprimer les tâches
    const deleteTask = (taskId) => {
        const dataArrIndex = taskData.findIndex((item) => item.id === taskId);
        if (dataArrIndex !== 1) {
            taskData.splice(dataArrIndex, 1);
            localStorage.setItem('data', JSON.stringify(taskData));
            updateTaskList();
        } else {
            console.error("task not found in taskData")
        }
    };
    // valider la tâche 
    const taskForm = document.querySelector('.todo-form');
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });

    const taskList = document.querySelector('.task-list');
    taskList.addEventListener('click', (e) => {
        const clickedElement = e.target;
        if (clickedElement.classList.contains('task-list-item-btn')) {
            const taskElement = clickedElement.parentNode;
            const taskId = taskElement.id;
            deleteTask(taskId, taskElement);
        }
    });
    
};
taskManager();
updateTaskList();


export default taskManager;