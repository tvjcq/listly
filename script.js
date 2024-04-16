document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);

    const taskList = document.getElementById("taskList");
    tasks.forEach((task) => {
      const newTask = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          newTask.style.textDecoration = "line-through";
        } else {
          newTask.style.textDecoration = "none";
        }
      });

      newTask.textContent = task;
      newTask.appendChild(checkbox);
      taskList.appendChild(newTask);
    });
  }
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  localStorage.removeItem("tasks");
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
});

const buttonAddTask = document.getElementById("buttonAddTask");
buttonAddTask.addEventListener("click", addTask);

const taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        newTask.style.textDecoration = "line-through";
      } else {
        newTask.style.textDecoration = "none";
      }
    });

    newTask.textContent = taskInput.value;
    newTask.appendChild(checkbox);
    taskList.appendChild(newTask);
    taskInput.value = "";

    saveTasksToLocalStorage();
  }
}

function saveTasksToLocalStorage() {
  const tasks = [];

  // Récupérer toutes les tâches de la liste
  const taskItems = document.querySelectorAll("#taskList li");
  taskItems.forEach((task) => {
    tasks.push(task.textContent);
  });

  // Enregistrer les tâches au format JSON dans le stockage local
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const underlineInput = document.getElementById("underlineInput");

taskInput.addEventListener("focus", function () {
  underlineInput.style.width = "80%";
});

taskInput.addEventListener("blur", function () {
  if (taskInput.value === "") {
    underlineInput.style.width = "480px";
  }
});
