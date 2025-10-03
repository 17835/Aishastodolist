document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');
  const clearCompletedBtn = document.getElementById('clear-completed');
  const categorySelect = document.getElementById('category-select');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return; // ignore empty input

    // Create task list item
    const li = document.createElement('li');
    li.className = 'task-item';

   // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.addEventListener('change', () => {
      li.classList.toggle('completed', checkbox.checked);

      if (checkbox.checked) {
        // Instantly move completed task to the bottom
        taskList.appendChild(li);
      }
    });

    // Task text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Category label
    const catLabel = document.createElement('span');
    catLabel.className = 'category-label';
    catLabel.textContent = categorySelect.value;

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', () => {
      if (li.parentElement) li.parentElement.removeChild(li);
    });

    // Assemble and add task to the list
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(catLabel);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    // Reset input
    taskInput.value = '';
    taskInput.focus();
  }

  // Add task when clicking the button
  addBtn.addEventListener('click', addTask);

  // Add task when pressing Enter
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
  });

  // Clear all completed tasks
  clearCompletedBtn.addEventListener('click', () => {
    const completedTasks = taskList.querySelectorAll('.task-item.completed');
    completedTasks.forEach(task => task.remove());
  });
});
