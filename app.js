let taskBtn = document.getElementById("add-task")
let taskInput = document.getElementById("task")
let taskList = document.getElementById("tasks")

taskBtn.addEventListener("click", function(){
    let task = taskInput.value
    addTask(task)
    taskInput.value =""    
})
function addTask(task){
    let li = document.createElement("li")
    li.innerHTML = task
    taskList.appendChild(li)
}
