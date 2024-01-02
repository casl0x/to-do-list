import { reset } from "./UIManager";

const openForm = (() => {
    const taskForm = document.querySelector('.todo-form');
    const openTaskFormBtn = document.getElementById('open-task-form-btn')
    const closeTaskFormBtn = document.querySelector('.todo-form-closebtn')

    openTaskFormBtn.addEventListener('click', () => 
        taskForm.classList.toggle('hidden')
    );

    closeTaskFormBtn.addEventListener('click', () =>
        reset()
    );
})();

export default openForm;