// importer les modules dans le fichier principal
import { addTask } from './modules/addTask.js';
import { manageTask } from './modules/manageTask.js';

// récupérer les ref d'élément HTML
const taskList = document.querySelector('.task-list')
const inputBox = document.querySelector('.todo-form-task')

// utiliser les modules 
addTask(inputBox, taskList);
manageTask(taskList);