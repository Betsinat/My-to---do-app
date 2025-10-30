const taskInput = document.getElementById('tasks')
const addButton = document.querySelector('button')
const tasksList = document.getElementById('list-tasks')
addButton.addEventListener('click', function(){
    const taskText = taskInput.value
    const newTask = document.createElement('li')
    newTask.textContent = taskText
    taskInput.value = ''
    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.addEventListener('click', function(){
         newTask.remove()
    })
    newTask.appendChild(button)
    tasksList.appendChild(newTask)
})
