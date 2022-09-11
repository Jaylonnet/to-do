import { format } from "date-fns";

const ToDoItem = (id, title, description, dueDate, priority) => {

    let completed = false;

    const checkIfCompleted = () => { return completed }

    return {
        get id() { return id },

        get title() { return title },
        set title(value) { title = value },

        get description() { return description },
        set description(value) { description = value },

        get dueDate() { return dueDate },
        set dueDate(value) { dueDate = value },

        get priority() { return priority },
        set priority(value) { priority = value },

        /**
         * @param {boolean} value
         */
        set completedStatus(value) { completed = value },

        checkIfCompleted,
    };
};

const Project = (id, title) => {

    let tasks = [];

    const addTask = (task) => {
        tasks.push(task);
    };

    return {
        get id() { return id },

        get title() { return title },
        set title(value) { title = value },

        get tasks() { return tasks },
        /**
         * @param {any} task
         */
        set addTask(task) { addTask(task) },
    };
};