const AddTaskInput = document.getElementById("AddTaskInput");
const AddTaskBtn = document.getElementById("AddTaskBtn");
const tasksNum = document.getElementById("tasksNum");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");

let tasks = [
  {
    id: 0,
    disc: "To study react fundamentals",
    isDone: false,
  },
];

let nextId = 1

function renderTasks() {
  todoList.innerHTML = "";
  doneList.innerHTML = "";
  let count = 0
  tasks.forEach((task) => {
    console.log(task);
    let taskElement = document.createElement("div");
	taskElement.classList.add('taskDec')
    taskElement.innerHTML = task.disc;
    if (!task.isDone) {
      todoList.appendChild(taskElement);
	  count +=1
    } else {
      doneList.appendChild(taskElement);
    }
  });
  tasksNum.innerHTML = count
}

renderTasks()

AddTaskBtn.addEventListener('click',()=>{
	console.log('btn is working')
	console.log(AddTaskInput.value)
	let newTask = { disc : AddTaskInput.value,
		id : nextId,
		isDone : false
	}
	nextId += 1
	tasks.push(newTask)
	renderTasks()
	AddTaskInput.value = ''
})