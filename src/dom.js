const projectList = document.querySelector('#project-list');
const taskList = document.querySelector('#task-list')


export function displayProject(project) {
    const li = document.createElement('li');
    li.dataset.projectId = project.id;
    li.textContent = project.title;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-project');

    li.append(deleteBtn);


    projectList.append(li);
};

export function removeFromDOM(id, type) {
    if (type == 'project') {
        document.querySelector(`li[data-project-id="${id}"]`).remove();
    } else if (type == 'task') {
        document.querySelector(`li[data-task-id="${id}"]`).remove();
    };
};

export function displayTask(task) {
    const li = document.createElement('li');
    li.dataset.taskId = task.id;
    li.dataset.projectId = task.projectId;

    const taskTitle = document.createElement('span');
    taskTitle.textContent = task.title;

    const taskDueDate = document.createElement('span');
    taskDueDate.textContent = task.dueDate;

    const taskPriority = document.createElement('span');
    taskPriority.textContent = task.priority;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-task');

    li.append(
        taskTitle,
        taskDueDate,
        taskPriority,
        deleteBtn,
    );

    taskList.append(li);
}

export function changeText(projectName, node) {
    node.textContent = projectName;
};

export function showTasks(projectId) {
    taskList.querySelectorAll('li').forEach((task) => {
        task.style.display = 'none';
    });

    taskList.querySelectorAll(`li[data-project-id="${projectId}"]`).forEach((task) => {
        task.style.display = 'block';
    });
};

export function resetForm(form) {
    for (let formField of form.elements) { formField.value = '' };
};

export function showEditTaskForm(task, editTaskForm) {
    editTaskForm.elements['task-title'].value = task.title;
    editTaskForm.elements['task-description'].value = task.description;
    editTaskForm.elements['task-due-date'].value = task.dueDate;
    editTaskForm.elements['task-priority'].value = task.priority;
};

export function updateTaskInDOM(task, taskElement) {
    const taskTitleSpan = taskElement.querySelector('span:nth-child(1)');
    taskTitleSpan.textContent = task.title;

    const taskDueDateSpan = taskElement.querySelector('span:nth-child(2)');
    taskDueDateSpan.textContent = task.dueDate;

    const taskPrioritySpan = taskElement.querySelector('span:nth-child(3)');
    taskPrioritySpan.textContent = task.priority;
};