export function manageTask(taskList){
    taskList.addEventListener("click", (e) =>{ 
        const item = e.target;

        // supprimer la tâche 
        if (item.classList[0] === 'task-todo-deletebtn'){
            const taskList = item.parentElement;
            taskList.remove();
        };

        // barrer la tâche cochée 
        if (item.classList[0] === 'task-todo-check'){
            const taskList = item.parentElement;
            taskList.classList.toggle('done');
        };
    });
};