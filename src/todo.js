const ToDoItem = (id, title, description, dueDate, priority) => {

    return {
        get id() { return id },

        get title() { return title },
        set title(value) { title = value },

        get description() { return description },
        set description(value) { description = value },

        get dueDate() { return dueDate },
        set dueDate(value) { dueDate = value },

        get priority() { return priority },
        set priority(value) { priority = value }
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
        set addTask(task) { addTask(task) },
    };
};