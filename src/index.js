import './style.css';
import {counter} from './counter';
import {displayProject, displayTask, removeProjectFromDOM, changeText} from './dom';
import {Task, Project} from './todo';

// Init unique ID counters
const taskCounter = counter();
const projectCounter = counter();

// selectedProject variable
let selectedProject;

// Declare Project Array
const projects = [];

// Get Forms
const projectForm = document.querySelector('#add-project-form');
const taskForm = document.querySelector('#add-task-form');

// Get Buttons
const addProjectBtn = document.querySelector('#add-project-btn');
const addTaskBtn = document.querySelector('#add-task-btn');

// Get Project Heading
const projectHeading = document.querySelector('#project-name');

// Event Listeners
addProjectBtn.addEventListener('click', createProject);
addTaskBtn.addEventListener('click', createTask);

// Functions
function createProject() {
    const project = Project(
        taskCounter.getUniqueId(),
        projectForm.elements['project-title'].value,
    );

    projects.push(project);

    displayProject(project);
    setSelectedProject(project);


    const deleteProjectBtn = document.querySelector(`li[data-project-id="${project.id}"] .delete-project`);
    deleteProjectBtn.addEventListener('click', (e) => {
        deleteProject(project.id);
        e.stopImmediatePropagation();
        e.stopPropagation();
    });

    const taskItemElement = document.querySelector(`li[data-project-id="${project.id}"]`);
    taskItemElement.addEventListener('click', function (e) {
        setSelectedProject(project);
    });

    resetForm(projectForm);
};

function deleteProject(projectId) {
    let project = projects.find(project => project.id === projectId);
    const index = projects.indexOf(project);
    projects.splice(index, 1);
    removeProjectFromDOM(project.id)
};

function resetForm(form) {
    for (let formField of form.elements) {formField.value = ''};
};

function setSelectedProject(project) {
    selectedProject = project;
    changeText(project.title, projectHeading)
};

function createTask() {
    const task = Task(
        taskCounter.getUniqueId(),
        taskForm.elements['task-title'].value,
        taskForm.elements['task-description'].value,
        taskForm.elements['task-due-date'].value,
        taskForm.elements['task-priority'].value,
        );
    
    displayTask(task, selectedProject);
    resetForm(taskForm);
};