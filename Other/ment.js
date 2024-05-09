let taskInput = document.getElementById("taskInput");
let button = document.getElementById("btn")
let tasks = document.getElementById("tasks")

button.onclick(()=>{
    taskInput.innerHTML = tasks `<p>{$taskInput.value}</p>`;
})