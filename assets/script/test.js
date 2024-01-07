// management des tâches
const taskData = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [] ;

let task = document.getElementById('title-input');
let taskList = document.getElementById('task-list');

    // bouton entrer une tâche
document.getElementById("enter").addEventListener("click", () => {
    createItem(task)
})

function updateTaskList() {
    let items = ""
    for (let i = 0; i < taskData.length; i++) { 
        items += `
            <li class="task">
                <input type="checkbox" id="taskDone">
                <p>${taskData[i]}</p>
                <button class="deleteBtn"><img src="./assets/img/trash-can-regular.svg" alt="delete"></button>
            </li>
        `
    } 
taskList.innerHTML = items;
taskDelete();
};

function taskDelete(){
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((dB, i) => {
      dB.addEventListener("click", () => { deleteItem(i) })
    })
}

function createItem(task){
    taskData.push(task.value)
    localStorage.setItem('items', JSON.stringify(taskData))
    location.reload()
}

function deleteItem(i){
    itemsArray.splice(i,1)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
  }

function updateItem(text, i){
    taskData[i] = text
    localStorage.setItem('items', JSON.stringify(taskData))
    location.reload()
}

window.onload = function() {
    updateTaskList()
};