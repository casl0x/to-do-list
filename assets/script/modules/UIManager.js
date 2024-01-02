const uiManager = (() => {
    const reset = () => {
        titleInput.value = "";
        dateInput.value = "";
        descriptionInput.value = "";
        taskForm.classList.toggle("hidden");
        currentTask = {};
    }

    const editTask = (this) => {

    }

})();
 
export {uiManager, reset};