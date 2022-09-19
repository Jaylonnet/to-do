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

export function removeProjectFromDOM(projectId) {
    document.querySelector(`li[data-project-id="${projectId}"]`).remove();
};

export function displayTask(task, selectedProject) {
    const li = document.createElement('li');
    li.dataset.taskId = task.id;
    li.dataset.projectId = selectedProject.id;

    const taskTitle = document.createElement('span');
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;

    const taskDueDate = document.createElement('span');
    taskDueDate.textContent = task.dueDate;

    const taskPriority = document.createElement('span');
    taskPriority.textContent = task.priority;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-task');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-task');

    li.append(
        taskTitle,
        taskDescription,
        taskDueDate,
        taskPriority,
        editBtn,
        deleteBtn,
    );

    taskList.append(li);
}

export function changeText(projectName, node) {
    node.textContent = projectName;
};