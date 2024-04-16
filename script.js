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
  }
}

const taskInput = document.getElementById("taskInput");
const underlineInput = document.getElementById("underlineInput");

taskInput.addEventListener("focus", function () {
  underlineInput.style.width = "80%";
});

taskInput.addEventListener("blur", function () {
  underlineInput.style.width = "480px";
});
