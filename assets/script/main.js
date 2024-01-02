// importer les modules dans le fichier principal
import openForm from './modules/openForm.js'
import taskManager from './modules/localStorage.js';
import {uiManager, reset} from './modules/UIManager.js'

// activer les modules 
openForm;
taskManager;
uiManager;
reset(); 


