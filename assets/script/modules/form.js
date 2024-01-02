import { reset } from "./UI.js";

const openForm = () => {
    const taskForm = document.querySelector('.todo-form');
    const openTaskFormBtn = document.querySelector('.open-form')
    const closeTaskFormBtn = document.querySelector('.todo-form-closebtn')

    openTaskFormBtn.addEventListener('click', () => 
        taskForm.classList.toggle('hidden')
    );

    closeTaskFormBtn.addEventListener('click', () =>
        reset()
    );
};

export  { openForm };