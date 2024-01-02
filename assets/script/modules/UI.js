import { titleTask, taskForm, descriptionTask } from "./storage.js";
let currentTask = {};

const reset = () => {
    titleTask.value = "";
    descriptionTask.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
}

const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id)
}
 
export { reset };