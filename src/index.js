const newTaskDescription = document.querySelector("#new-task-description")
const theList = document.querySelector("#tasks")
const newSubmit = document.querySelector("#create-task-form")

const createNewTask = event => {
	event.preventDefault()
	const newTask = document.createElement('li')

	newTask.innerHTML = newTaskDescription.value

  //create deletebutton and append it to the newTask
  const delButton = createDeleteButton()
  newTask.appendChild(delButton) 
	
  //append newTask to theList
  theList.appendChild(newTask)

	event.target.reset()
}
//arrow function example - same as createDeleteButton - Diff format ; same results
const deleteTask = (event) => {
  const selectedTask = event.target.parentElement; //target is the element that listened to the event
  theList.removeChild(selectedTask)
}


function createDeleteButton(){
   const btn = document.createElement('button')
    btn.innerText = "D"
    btn.addEventListener('click',  (event) => deleteTask(event))
    return btn
}

newSubmit.addEventListener('submit', (func) => createNewTask(func))
