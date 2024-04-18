// Récupérer les données du stockage local
document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);

    const taskList = document.getElementById("taskList");
    tasks.forEach((task, index) => {
      const newTask = document.createElement("li");
      const checkbox = document.createElement("input");
      const line = document.createElement("div");
      line.className = "line";
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          newTask.style.textDecoration = "line-through";
        } else {
          newTask.style.textDecoration = "none";
        }
      });
      newTask.style.opacity = 0;
      newTask.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1000,
        fill: "forwards",
        delay: index * 300,
      });
      newTask.animate(
        [{ transform: "translateX(-5%)" }, { transform: "translateX(0%)" }],
        { duration: 1000, fill: "forwards", easing: "ease", delay: index * 300 }
      );
      line.style.width = "0%";
      line.animate([{ width: "0%" }, { width: "100%" }], {
        duration: 1000,
        fill: "forwards",
        easing: "ease-in-out",
        delay: index * 300,
      });

      if (index !== 0) {
        taskList.appendChild(line);
      }

      newTask.textContent = task;
      newTask.appendChild(checkbox);
      taskList.appendChild(newTask);
    });
  }
});

// Supprimer toutes les données du stockage local
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  localStorage.removeItem("tasks");
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
});

// Ajouter une tâche à la liste en appuyant sur le bouton "Ajouter"
const buttonAddTask = document.getElementById("buttonAddTask");
buttonAddTask.addEventListener("click", addTask);

// Ajouter une tâche à la liste en appuyant sur Entrée
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
    const line = document.createElement("div");
    line.className = "line";
    checkbox.type = "checkbox";
    // TODO : Faire en sort que le li aille dans le ul des taches terminées
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        newTask.style.textDecoration = "line-through";
      } else {
        newTask.style.textDecoration = "none";
      }
    });

    newTask.textContent = taskInput.value;

    newTask.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 1000,
      fill: "forwards",
    });
    newTask.animate(
      [{ transform: "translateX(-5%)" }, { transform: "translateX(0%)" }],
      { duration: 1000, fill: "forwards", easing: "ease" }
    );
    line.animate([{ width: "0%" }, { width: "100%" }], {
      duration: 1000,
      fill: "forwards",
      easing: "ease-in-out",
    });
    if (taskList.firstChild !== null) {
      taskList.appendChild(line);
    }

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
