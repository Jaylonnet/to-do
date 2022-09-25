import './style.css';
import { counter } from './counter';
import { displayProject, displayTask, removeFromDOM, changeText, showTasks, resetForm, showEditTaskForm, updateTaskInDOM } from './dom';
import { Task, Project } from './todo';
import { formatDistance, format } from 'date-fns';

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
const editProjectForm = document.querySelector('#edit-project-form');
const editTaskForm = document.querySelector('#edit-task-form');

// Get Buttons
const addProjectBtn = document.querySelector('#add-project-btn');
const addTaskBtn = document.querySelector('#add-task-btn');
const saveTaskChangesBtn = editTaskForm.querySelector('#edit-task-btn');

// Get Project Heading
const projectHeading = document.querySelector('#project-name');

// Event Listeners
addProjectBtn.addEventListener('click', createProject);
addTaskBtn.addEventListener('click', createTask);

// Functions
(function setCurrentYear() { taskForm.querySelector('#task-due-date').value = format(new Date(), "yyyy-MM-dd") })();

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

    const projectItemElement = document.querySelector(`li[data-project-id="${project.id}"]`);
    projectItemElement.addEventListener('click', function (e) {
        setSelectedProject(project);
    });

    resetForm(projectForm);
};

function deleteProject(projectId) {
    let project = projects.find(project => project.id === projectId);
    const index = projects.indexOf(project);
    projects.splice(index, 1);
    removeFromDOM(project.id, "project")
};

function setSelectedProject(project) {
    selectedProject = project;
    changeText(project.title, projectHeading);
    showTasks(selectedProject.id);
};

function createTask() {
    const task = Task(
        taskCounter.getUniqueId(),
        selectedProject.id,
        taskForm.elements['task-title'].value,
        taskForm.elements['task-description'].value,
        taskForm.elements['task-due-date'].value,
        taskForm.elements['task-priority'].value,
    );

    displayTask(task);

    const taskElement = document.querySelector(`li[data-task-id="${task.id}"]`);

    const taskTitleElement = taskElement.querySelector('span:nth-child(1)');
    taskTitleElement.addEventListener('click', () => {
        editTask(task, taskElement);
    })

    const deleteTaskBtn = taskElement.querySelector(`.delete-task`);
    deleteTaskBtn.addEventListener('click', () => {
        deleteTask(task.id)
    });
    resetForm(taskForm);
};

function deleteTask(taskId) {
    removeFromDOM(taskId, "task")
};

function editTask(task, taskElement) {
    showEditTaskForm(task, editTaskForm);
    function saveTaskChanges () {
        task.title = editTaskForm.elements['task-title'].value;
        task.description = editTaskForm.elements['task-description'].value;
        task.dueDate = editTaskForm.elements['task-due-date'].value;
        task.priority = editTaskForm.elements['task-priority'].value;
        saveTaskChangesBtn.removeEventListener('click', saveTaskChanges);
        updateTaskInDOM(task, taskElement);
        resetForm(editTaskForm)
    };

    saveTaskChangesBtn.addEventListener('click', saveTaskChanges)
};