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

export function showTaskEditForm(form, task) {
    if (form.classList.contains('hide')) {
        form.classList.remove('hide');
    };

    form.dataset.taskId = task.id;

    form.elements['task-title'].value = task.title;
    form.elements['task-description'].value = task.description;
    form.elements['task-due-date'].value = task.dueDate;
    form.elements['task-priority'].value = task.priority;
};