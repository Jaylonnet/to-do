import './style.css';
import {counter} from './counter';
import {displayProject} from './dom';
import {ToDoItem, Project} from './todo'

const taskCounter = counter();
const projectCounter = counter();

const projects = [];
let selectedProject = null;

const createProjectForm = document.querySelector('#new-project-form');
const createProjectBtn = document.querySelector('#new-project-btn');
createProjectBtn.addEventListener('click', (e) => {
    let title = createProjectForm.elements['project-title'];
    createProject(title.value);
    title.value = ''
});

function createProject(title) {
    let projectId = projectCounter.getUniqueId();
    const project = Project(projectId, title);
    projects.push(project);
    displayProject(project);
    document.querySelector(`#project-list li[data-projectid="${projectId}"]`).addEventListener('click', () => {
        selectedProject = project;
    });
};