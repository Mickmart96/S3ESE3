// Function to add a new task to the list
function addTask() {
  const input = document.getElementById('input');
  const list = document.getElementById('list');

  if (input.value !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span onclick="toggleComplete(this)"> ${input.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Elimina</button>
        `;
    list.appendChild(newTask);
    input.value = '';
  }
}

// Function to toggle task completion
function toggleComplete(task) {
  task.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(button) {
  const list = document.getElementById('list');
  const listItem = button.parentNode;
  list.removeChild(listItem);
}

