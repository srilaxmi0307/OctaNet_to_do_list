function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
  
    if (taskText.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
  
      var deleteButton = document.createElement("span");
      deleteButton.textContent = " ❌";
      deleteButton.className = "delete";
      deleteButton.onclick = function() {
        taskList.removeChild(li);
      };
      li.appendChild(deleteButton);
  
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  