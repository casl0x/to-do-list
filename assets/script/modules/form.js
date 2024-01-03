 export const toggleForm = () => {
    const taskForm = document.querySelector('.todo-form');
    const titleTask = document.querySelector('.todo-form-task');
    const descriptionTask = document.querySelector('.todo-form-description');
    const openTaskFormBtn = document.querySelector('.open-form')
    const closeTaskFormBtn = document.querySelector('.todo-form-closebtn')

    // ouvrir le formulaire
    openTaskFormBtn.addEventListener('click', () => 
        taskForm.classList.toggle('hidden')
    );

    // fermer le formulaire 
    closeTaskFormBtn.addEventListener('click', () =>{
            titleTask.value = "";
            descriptionTask.value = "";
            taskForm.classList.toggle("hidden");
    });

};
