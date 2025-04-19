console.log("Welcome to Task Manager")

const taskContainers = document.querySelectorAll(".task-container")
// console.log("taskContainers", taskContainers)
const tasks = document.querySelectorAll(".task")

let taskDragged

tasks.forEach(task => task.addEventListener("dragstart", dragStart))

taskContainers.forEach(taskContainer => {
    taskContainer.addEventListener("drop", dragDrop)
    taskContainer.addEventListener("dragover", dragOver)
})

function dragStart(e){
    taskDragged = e.target
}

function dragOver(e){
    e.preventDefault()
}

function dragDrop(e){
    console.log("drop location:", e.target)
    e.target.append(taskDragged)
}

// document.querySelectorAll("img").forEach((img) => {
//     img.setAttribute("draggable", "false");
//   });

const images = document.querySelectorAll(".task img")
// console.log(images)

// Good Job Brett!
// images.forEach((img) => {
//     img.setAttribute("draggable", "false");
// });

images.forEach(img => img.addEventListener('dragstart', (e) => {
    e.preventDefault() 
}))
