const taskManager = (() => {
    let tasks = [];

    const loadTasks = () => {
        const storedTask = localStorage.getItem('tasks');
        if (storedTask) {
            tasks = JSON.parse(storedTask);
            tasks.forEach(tasks => {
                createTaskElement(tasks);
            });
        }
    };

    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTask = (taskName, taskDescription) => {
        const newTask = {
            id: Date.now,
            name: taskName,
            description: taskDescription, 
            completed: false,
        };
        tasks.push(newTask);
        saveTasks();
        return newTask
    };

    const markTaskAsDone = (taskId) => {
        const tasksIndex =  tasks.findIndex(task => task.id === taskId)
        if (tasksIndex !== -1){
            tasks[tasksIndex].completed = true;
            saveTasks();
            return tasks[tasksIndex];
        }
        return null;
    };

    const deleteTask = (taskId) => {
        tasks = tasks.filter(task => task.id === taskId);
        saveTasks();
    }

    return {
        loadTasks,
        saveTasks,
        addTask,
        markTaskAsDone,
        deleteTask,
        tasks,
    };
})();

export default taskManager;