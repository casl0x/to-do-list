 export const toggleForm = () => {
    const taskForm = document.getElementById('task-form');
    const titleTask = document.getElementById('title-input');
    const descriptionTask = document.getElementById('description-input');
    const openTaskFormBtn = document.getElementById('open-form');
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
