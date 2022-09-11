const projectList = document.querySelector('#project-list');

export function displayProject(project) {
    const li = document.createElement('li');
    li.textContent = project.title;
    li.dataset.projectid = project.id;
    projectList.appendChild(li);


}