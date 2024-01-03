// import des modules
import { toggleForm } from "./modules/form.js";
import taskManager from "./modules/storage.js";
import { deleteTask } from "./modules/task.js";


// activer les modules

document.querySelector('.task-list-item-btn').addEventListener('click', deleteTask)
toggleForm();
taskManager();
