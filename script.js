// Récupérer les données du stockage local
document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("tasks");
  const savedTasksDone = localStorage.getItem("tasksDone");
  var delayIndex = 0;
  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);

    const taskList = document.getElementById("taskList");
    tasks.forEach((task, index) => {
      console.log("marqueur 2");
      const newTask = document.createElement("li");
      const text = document.createElement("p");
      const checkbox = document.createElement("button");
      const line = document.createElement("div");
      const strike = document.createElement("div");
      newTask.className = "task";
      line.className = "line";
      strike.className = "line";
      strike.id = "strike";
      checkbox.textContent = "Fait";
      checkbox.addEventListener("click", function () {
        if (newTask.classList.contains("task")) {
          text.animate([{ opacity: 1 }, { opacity: 0.5 }], {
            duration: 1000,
            fill: "forwards",
          });
          strike.animate([{ width: "0%" }, { width: "80%" }], {
            duration: 1000,
            fill: "forwards",
            easing: "ease-in-out",
          });
          strike.animate([{ opacity: 1 }, { opacity: 0.5 }], {
            duration: 1000,
            fill: "forwards",
          });
          checkbox.textContent = "Annuler";
          newTask.classList.remove("task");
          newTask.classList.add("taskDone");
        } else {
          text.animate([{ opacity: 0.5 }, { opacity: 1 }], {
            duration: 1000,
            fill: "forwards",
          });
          strike.animate([{ width: "80%" }, { width: "0%" }], {
            duration: 1000,
            fill: "forwards",
            easing: "ease-in-out",
          });
          strike.animate([{ opacity: 0.5 }, { opacity: 1 }], {
            duration: 1000,
            fill: "forwards",
          });
          checkbox.textContent = "Fait";
          newTask.classList.remove("taskDone");
          newTask.classList.add("task");
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

      text.textContent = task;
      newTask.appendChild(text);
      newTask.appendChild(checkbox);
      taskList.appendChild(newTask);
      taskList.appendChild(strike);

      delayIndex++;
    });
  }
  if (savedTasksDone) {
    const task = JSON.parse(savedTasksDone);
    const taskList = document.getElementById("taskChecked");

    task.forEach((task, index) => {
      console.log("marqueur 1");
      const newTask = document.createElement("li");
      const text = document.createElement("p");
      const checkbox = document.createElement("button");
      const line = document.createElement("div");
      const strike = document.createElement("div");
      newTask.className = "taskDone";
      line.className = "line";
      strike.className = "line";
      strike.id = "strike";
      checkbox.textContent = "Rétablir";
      checkbox.addEventListener("click", function () {
        if (newTask.classList.contains("task")) {
          text.animate([{ opacity: 1 }, { opacity: 0.5 }], {
            duration: 1000,
            fill: "forwards",
          });
          strike.animate([{ width: "0%" }, { width: "80%" }], {
            duration: 1000,
            fill: "forwards",
            easing: "ease-in-out",
          });
          strike.animate([{ opacity: 1 }, { opacity: 0.5 }], {
            duration: 1000,
            fill: "forwards",
          });
          checkbox.textContent = "Annuler";
          newTask.classList.remove("task");
          newTask.classList.add("taskDone");
        } else {
          text.animate([{ opacity: 0.5 }, { opacity: 1 }], {
            duration: 1000,
            fill: "forwards",
          });
          strike.animate([{ width: "80%" }, { width: "0%" }], {
            duration: 1000,
            fill: "forwards",
            easing: "ease-in-out",
          });
          strike.animate([{ opacity: 0.5 }, { opacity: 1 }], {
            duration: 1000,
            fill: "forwards",
          });
          checkbox.textContent = "Fait";
          newTask.classList.remove("taskDone");
          newTask.classList.add("task");
        }
      });

      newTask.style.opacity = 0;

      newTask.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1000,
        fill: "forwards",
        delay: delayIndex * 300,
      });
      newTask.animate(
        [{ transform: "translateX(-5%)" }, { transform: "translateX(0%)" }],
        {
          duration: 1000,
          fill: "forwards",
          easing: "ease",
          delay: delayIndex * 300,
        }
      );
      line.style.width = "0%";
      line.animate([{ width: "0%" }, { width: "100%" }], {
        duration: 1000,
        fill: "forwards",
        easing: "ease-in-out",
        delay: delayIndex * 300,
      });
      text.animate([{ opacity: 0 }, { opacity: 0.5 }], {
        duration: 1000,
        fill: "forwards",
        delay: delayIndex * 300,
      });
      strike.animate([{ width: "0%" }, { width: "80%" }], {
        duration: 1000,
        fill: "forwards",
        easing: "ease-in-out",
        delay: delayIndex * 300,
      });

      if (index !== 0) {
        taskList.appendChild(line);
      }

      text.textContent = task;
      newTask.appendChild(text);
      newTask.appendChild(checkbox);
      taskList.appendChild(newTask);
      taskList.appendChild(strike);

      delayIndex++;
    });
  }
});

// Supprimer toutes les données du stockage local
// TODO : Faire en sorte que le bouton "Réinitialiser" demande une confirmation avant de supprimer les tâches
// TODO : Faire en sorte que le bouton "Réinitialiser" supprime également les tâches terminées
// TODO : Faire une animation pour la suppression des tâches
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  localStorage.removeItem("tasks");
  localStorage.removeItem("tasksDone");
  const taskList = document.getElementById("taskList");
  const taskChecked = document.getElementById("taskChecked");
  taskList.innerHTML = "";
  taskChecked.innerHTML = "";
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
    const text = document.createElement("p");
    const checkbox = document.createElement("button");
    const line = document.createElement("div");
    const strike = document.createElement("div");
    newTask.className = "task";
    line.className = "line";
    strike.className = "line";
    strike.id = "strike";
    checkbox.textContent = "Fait";
    // TODO : Après un certain temps, la tache vas dans les tâches terminées
    checkbox.addEventListener("click", function () {
      if (newTask.classList.contains("task")) {
        text.animate([{ opacity: 1 }, { opacity: 0.5 }], {
          duration: 1000,
          fill: "forwards",
        });
        strike.animate([{ width: "0%" }, { width: "80%" }], {
          duration: 1000,
          fill: "forwards",
          easing: "ease-in-out",
        });
        strike.animate([{ opacity: 1 }, { opacity: 0.5 }], {
          duration: 1000,
          fill: "forwards",
        });
        checkbox.textContent = "Annuler";
        newTask.classList.remove("task");
        newTask.classList.add("taskDone");
      } else {
        text.animate([{ opacity: 0.5 }, { opacity: 1 }], {
          duration: 1000,
          fill: "forwards",
        });
        strike.animate([{ width: "80%" }, { width: "0%" }], {
          duration: 1000,
          fill: "forwards",
          easing: "ease-in-out",
        });
        strike.animate([{ opacity: 0.5 }, { opacity: 1 }], {
          duration: 1000,
          fill: "forwards",
        });
        checkbox.textContent = "Fait";
        newTask.classList.remove("taskDone");
        newTask.classList.add("task");
      }
    });

    text.textContent = taskInput.value;

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

    newTask.appendChild(text);
    newTask.appendChild(checkbox);
    taskList.appendChild(newTask);
    taskList.appendChild(strike);
    taskInput.value = "";
  }
}

window.addEventListener("beforeunload", function () {
  saveTasksToLocalStorage();
});

function saveTasksToLocalStorage() {
  const tasks = [];
  const tasksDone = [];

  const taskItems = document.querySelectorAll("#taskList li");
  const taskCheckedItems = document.querySelectorAll("#taskChecked li");

  taskItems.forEach((task) => {
    const taskText = task.querySelector("p").textContent;
    if (task.classList.contains("task")) {
      tasks.push(taskText);
    } else {
      tasksDone.push(taskText);
    }
  });

  taskCheckedItems.forEach((task) => {
    const taskText = task.querySelector("p").textContent;
    if (task.classList.contains("task")) {
      tasks.push(taskText);
    } else {
      tasksDone.push(taskText);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("tasksDone", JSON.stringify(tasksDone));
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
