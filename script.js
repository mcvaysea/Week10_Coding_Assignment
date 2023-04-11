const form = document.querySelector("form");
const submit = document.querySelector("button");
const input = document.querySelector("input");
let tasks = [];
const taskList = document.getElementById("listTasks");

form.addEventListener("submit", (enterTask) => {
	if (input.value === "" || input.value === null) {
		enterTask.preventDefault();
		alert("You have not entered a task.");
	} else {
		enterTask.preventDefault();
		localStorage.setItem("task", input.value);
		let currentTask = localStorage.getItem("task");
		if (currentTask !== "" && currentTask !== null) {
			tasks.push(currentTask);
			input.value = "";
		}
		console.log(tasks);
	}
});

let orderedTaskList = document.getElementById("orderedTaskList");

taskList.addEventListener("click", function () {
	for (let i = 0; i < tasks.length; i++) {
		const toDoItem = document.createElement("li");
		toDoItem.innerText = tasks[i];
		orderedTaskList.appendChild(toDoItem);
		toDoItem.addEventListener("click", function () {
			orderedTaskList.removeChild(toDoItem);
			console.log("click");
		});
	}
});

function clearToDoList() {
	location.reload();
}
