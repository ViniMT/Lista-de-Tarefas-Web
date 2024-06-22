function addTask(timeOfDay) {
    const inputId = timeOfDay === 'day' ? 'new-day-task' : 'new-night-task';
    const listId = timeOfDay === 'day' ? 'day-tasks' : 'night-tasks';
    const taskInput = document.getElementById(inputId);
    const taskList = document.getElementById(listId);

    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() {
            taskList.removeChild(newTask);
        };

        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}
