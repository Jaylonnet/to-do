const projectList = document.querySelector('#project-list');


export function displayProject(project) {
    const li =  document.createElement('li');
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
}

export function changeText(projectName, node) {
    node.textContent = projectName;
};